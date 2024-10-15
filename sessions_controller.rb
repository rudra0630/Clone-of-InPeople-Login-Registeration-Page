class SessionsController < ApplicationController
    def create
      username = params[:username]
      password = params[:password]
      # You can now add logic to authenticate the user
      # For example: User.find_by(username: username).authenticate(password)
  
      if user_authenticated
        # Redirect to the user's profile or dashboard
      else
        # Re-render the login page with an error message
      end
    end
  end
  