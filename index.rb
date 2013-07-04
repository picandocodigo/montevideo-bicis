$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'sinatra'
require 'lib/dead_people'

get "/" do
  haml :index
end

get "/data" do
  haml :data, locals: {data: DeadPeople.new}
end

get "/leyes" do
  haml :leyes
end

get "/leyes/:ley" do
  ley = params[:ley]
  haml :"leyes/#{ley}", layout: :layout
end
