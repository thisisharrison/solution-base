class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(session_params)
    if @user.nil?
      render json: ['Wrong credentials'], status: 401
    else
      login!(@user)
      render :show
    end
  end

  def destroy
    if current_user.nil?
      render json: ["No Current User"], status: 404
    end
    logout!
    render json: {}
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
