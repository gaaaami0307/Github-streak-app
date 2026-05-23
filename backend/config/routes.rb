Rails.application.routes.draw do
  get "/up", to: "health#show"
  root "health#show"
end
