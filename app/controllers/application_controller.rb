class ApplicationController < ActionController::Base
  
  helper_method :current_user, :logged_in?

  # sets the app's session token to be user's
  def login!(user)
    session[:session_token] = user.session_token
  end

  def logout!
    # reset session token of the app
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  # we'll load this in preload applicationstate
  def current_user
    # check for app's session
    return nil unless session[:session_token]
    # return or find user with matching session token
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_sign_in!
    render :json => ['Unauthorized'], :status => :unauthorized unless logged_in?
  end

  # add is true for creating bookmark, false if deleting
  def make_bookmark(type, add)
    if add
      @bookmark = current_user.bookmarks.new({ bookmarkable_type: type, bookmarkable_id: params[:id] })
      if @bookmark.save
        # return to controller and return updated resource
        return true
      else
        return :json => @bookmark.errors.full_messages, status: :unprocessable_entity
      end
    else
      @bookmark = current_user.bookmarks.where({ bookmarkable_type: type, bookmarkable_id: params[:id] }).first
      if @bookmark.nil? 
        return :json => ['No bookmark found'], status: :not_found
      end 
      if @bookmark.destroy
        return true
      else
        return :json => @bookmark.errors.full_messages, status: :unprocessable_entity
      end
    end
  end

  def make_vote(type, add)
    if add
      @vote = current_user.votes.new({ voteable_type: type, voteable_id: params[:id] })
      if @vote.save
        return true
      else
        return :json => @vote.errors.full_messages, status: :unprocessable_entity
      end
    else
      @vote = current_user.votes.where({ voteable_type: type, voteable_id: params[:id] }).first
      if @vote.nil?
        return :json => ['No vote found'], status: :not_found
      end
      if @vote.destroy
        return true
      else
        return :json => @vote.errors.full_messages, status: :unprocessable_entity
      end
    end
  end
  
end
