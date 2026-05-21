class HealthController < ApplicationController
  def show
    render json: {
      status: "ok",
      app: "github-streak-app",
      timestamp: Time.current.iso8601
    }
  end
end
