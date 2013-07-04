$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'sinatra'
require 'lib/dead_people'

get "/" do
  haml :index
end

get "/data" do
  haml :data, locals: {data: DeadPeople.new}
end
