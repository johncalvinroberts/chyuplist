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
    task.save

    redirect_to root_path, notice: "successfully added task"
  end

  def edit
  end

  def update
    @task.update(task_params)
    @task.save

    redirect_to root_path
  end

  def destroy
    if @task.destroy
      respond_to do |format|
        format.html { redirect_to root_path, notice: "task deleted" }
        format.js
      end
    else
      respond to do |format|
        format.html { redirect_to root_path, notice: "failed" }
        format.js
      end
    end

  end

  private

  def task_params
    task_params = params.require(:task).permit(:name, :content, :duedate, :done, :user_id)
  end

  def find_task
    @task = Task.find(params[:id])
  end

end
