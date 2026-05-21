FROM ruby:3.3-slim

ENV BUNDLE_PATH=/usr/local/bundle \
    BUNDLE_WITHOUT=production

RUN apt-get update -qq \
  && apt-get install -y --no-install-recommends build-essential libpq-dev git curl \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY Gemfile ./
RUN bundle install

COPY . ./

EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0", "-p", "3000"]
