$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'sinatra'
require 'github/markup'
require 'lib/dead_people'

get "/" do
  file = 'README.md'
  readme = GitHub::Markup.render(file, File.read(file))
  haml :index, locals: {readme: readme}
end

get "/data" do
  haml :data, locals: {data: DeadPeople.new}
end
