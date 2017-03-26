class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def give_time
    @time = Time.now.strftime("%H:%M:%S ")
    render :partial => 'shared/time_portion'
  end

end
