require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module GithubStreakApp
  class Application < Rails::Application
    config.load_defaults 7.1
    config.api_only = true
    config.time_zone = "Tokyo"

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins ENV.fetch("CORS_ORIGINS", "http://localhost:5173").split(",").map(&:strip)
        resource "*",
                 headers: :any,
                 methods: %i[get post put patch delete options head],
                 credentials: true
      end
    end
  end
end
