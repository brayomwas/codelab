import os
import urllib
import xmlrpclib
from wordpress_xmlrpc.methods import posts
from wordpress_xmlrpc.methods import media, posts
from wordpress_xmlrpc.compat import xmlrpc_client
from wordpress_xmlrpc import Client, WordPressPost


class Custom_WP_XMLRPC:
    	
    def post_article(self, wpUrl, wpUserName, wpPassword, articleTitle, articleCategories, articleContent, articleTags, PhotoUrl):
        
        self.path=os.getcwd()+"\\00000001.jpg"
        self.articlePhotoUrl=PhotoUrl
        self.wpUrl=wpUrl
        self.wpUserName=wpUserName
        self.wpPassword=wpPassword
        
        #Download File
        f = open(self.path,'wb')
        f.write(urllib.urlopen(self.articlePhotoUrl).read())
        f.close()
        
        #Upload to WordPress
        client = Client(self.wpUrl,self.wpUserName,self.wpPassword)
        filename = self.path
        
        # prepare metadata
        data = {'name': 'picture.jpg','type': 'image/jpg',}
    
        # read the binary file and let the XMLRPC library encode it into base64
        with open(filename, 'rb') as img:
            data['bits'] = xmlrpc_client.Binary(img.read())
        response = client.call(media.UploadFile(data))
        attachment_id = response['id']
        
        #Post
        post = WordPressPost()
        post.title = articleTitle
        post.content = articleContent
        post.terms_names = { 'post_tag': articleTags,'category': articleCategories}
        post.post_status = 'publish'
        post.thumbnail = attachment_id
        post.id = client.call(posts.NewPost(post))
        print('Post Successfully posted. Its Id is: ',post.id)


#Url of Image on the internet
ariclePhotoUrl='http://i1.tribune.com.pk/wp-content/uploads/2013/07/584065-twitter-1375197036-960-640x480.jpg' 
# Dont forget the /xmlrpc.php cause thats your posting adress for XML Server
wpUrl='http://localhost:8080/chaptrlab/xmlrpc.php' 
#WordPress Username
wpUserName='cyrilmichino'
#WordPress Password
wpPassword='28657Nairobi'
#Post Title
articleTitle='Testing Python Script version 3'
#Post Body/Description
articleContent='Final .... Testing Fully Automated'
#list of tags
articleTags=['test','demo'] 
#list of Categories
articleCategories=['test','demo']

#########################################
# Creating Class object & calling the xml rpc custom post Function
#########################################
xmlrpc_object	=	Custom_WP_XMLRPC()
#On Post submission this function will print the post id
xmlrpc_object.post_article(wpUrl,wpUserName, wpPassword, articleTitle, articleCategories, articleContent, articleTags, ariclePhotoUrl)