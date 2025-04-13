class Api::V1::QuestionsController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    @questions = if params[:tag].present? &&  params[:tag] != "All"
      Question.where('tag = ?', params[:tag]).order(:id)
    else
      Question.all.order(:id)
    end
    render json: @questions, status: :ok
  end

  def update_counter
    @question = Question.find params[:id]
    if params[:count_for] == 'like'
      @question.update(like_counter: @question.like_counter + 1)
    elsif params[:count_for] == 'dislike'
      @question.update(dislike_counter: @question.dislike_counter + 1)
    end
    render json: @question, status: :ok
  end

  def create
    @question = Question.new(params_permit)
    if @question.save
      render json: { data: @question, status: "success"}, status: :ok
    else
      render json: { data: @question.errors.full_messages, status: "failure" }, status: :unprocessable_entity
    end
  end

  private

  def params_permit
    params.permit(:tag, :title, :body)
  end
end
