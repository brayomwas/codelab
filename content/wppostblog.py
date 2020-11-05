from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods.users import GetUserInfo
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost


### Essential cliet access details:
    # Enter domain as "example.com" without including "https://" or the slash "/" after the domain.
    # If the wordpress site is in a subdirectory place the link as follows: "example.com/subdirectory" with no "http://" or slash "/" after the link.

username = input("Enter your username: ")
password = input("Enter your password: ")
website_link = "http://" + input(" Enter your Wordpress Website Domain(e.g. example.com): ") + "/xmlrpc.php"

wp = Client(website_link, username, password)
#wp.call(GetPosts())

#wp.call(GetUserInfo())

post = WordPressPost()
post.title = 'My Test Article'
post.content = '''<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>This is the body of <b>my new post</b></p>.
'''
post.terms_names = {'post_tag': ['test', 'firstpost'],'category': ['Introductions', 'Tests']}
wp.call(NewPost(post))