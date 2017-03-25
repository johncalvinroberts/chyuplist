class AddDuedateToTask < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :duedate, :datetime
  end
end
