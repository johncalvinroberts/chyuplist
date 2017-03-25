class TasksController < ApplicationController

  before_action :find_task, only:[:show, :edit, :update, :destroy]

  def index
    @tasks = Task.all
  end

  def show
  end

  def new
    @task = Task.new
  end

  def create
    task = Task.new(task_params)
    task.user_id = current_user.id
    task.save!
    redirect_to task_path(task)
  end

  def edit
  end

  def update
    @task.update(task_params)

  end

  def destroy
    @task.destroy
  end

  private

  def task_params
    task_params = params.require(:task).permit(:name, :content, :duedate, :done, :user_id)
  end

  def find_task
    @task = Task.find(params[:id])
  end

end
