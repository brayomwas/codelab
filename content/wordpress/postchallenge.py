from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods.users import GetUserInfo
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost


### Essential client access details:
    # Enter domain as "example.com" without including "https://" or the slash "/" after the domain.
    # If the wordpress site is in a subdirectory place the link as follows: "example.com/subdirectory" with no "http://" or slash "/" after the link.

def wpclient(username, password, domain="box5880.temp.domains/~chaptrgl/codelab"):
  "Authenticate WordPress Login and Output Client"

  website_link = "http://" + domain + "/xmlrpc.php"
  wp = Client(website_link, username, password)
  
  return wp


def postwpchallenge(title, content, tags, categories, type = "challenge"):
  #title (string), content (string/html), tags (list), categories (list), type (string)

  post = WordPressPost()
  post.post_type = type
  
  post.title = title
  post.content = content
  
  post.terms_names = {'post_tag': tags,'category': categories}
  wp.call(NewPost(post))

  print("Challenge Posted to WordPress")


'''username = input("Enter your username: ")
password = input("Enter your password: ")
#domain = input(" Enter your Wordpress Website Domain(e.g. example.com): ")

#wp.call(GetPosts()), wp.call(GetUserInfo())
wp = wpclient(username, password) #pass domain argument if different from the stated

title = "My Test Article"
content = "<p>Let us have some fun</p>"

tags = ["test"]
categories = ["Test"]

postwpchallenge(title, content, tags, categories)'''