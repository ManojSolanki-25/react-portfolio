class AddLikeAndDislikeCounterToQuestion < ActiveRecord::Migration[8.0]
  def change
    add_column :questions, :like_counter, :integer, default: 0
    add_column :questions, :dislike_counter, :integer, default: 0
    add_column :questions, :tag, :string, null: false, default: "Ruby"
  end
end
