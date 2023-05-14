
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, \
RoleMixin, login_required, current_user
from app import  db
from datetime import datetime,timedelta 
import json
from time import time
import sqlalchemy
import re
from flask import  render_template
import secrets
# try:
#     db.metadata.remove("new_claimers") 
# except sqlalchemy.exc.InvalidRequestError:
#     pass


# import flask_whooshalchemy as whooshalchemy

import sys



# print(whooshalchemy.__ver__)


# if sys.version_info >= (3, 0):
#     enable_search = False
# else:
#     enable_search = True


# Flask-WhooshAlchemy @ git+git://github.com/miguelgrinberg/flask-whooshalchemy.git@f6266d34ed836a880a0f81586002770e6fc1b45a



#define DATABSE models


# Database Tables
roles_users = db.Table('roles_users', 
    db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
    db.Column('role_id', db.Integer(), db.ForeignKey('role.id')))

followers = db.Table('followers',
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('followed_id', db.Integer, db.ForeignKey('user.id'))
)




roomies = db.Table('roomies',
    db.Column('roomie_follower', db.Integer, db.ForeignKey('user.id')),
    db.Column('roomie_followed', db.Integer, db.ForeignKey('user.id'))
)


roomie_request = db.Table('roomie_request',
    db.Column('request_sender_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('requested_user_id', db.Integer, db.ForeignKey('user.id')),

)


new_claimers = db.Table('new_claimer', 
    db.Column('claimer_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('finder_id', db.Integer, db.ForeignKey('user.id')),
    # extend_existing=True
)

# new_claimers.extend_existing = True


# sqlalchemy.schema.MetaData.remove(claimers) 




class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))




class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    phone = db.Column(db.String(11), unique = True)
    whatssap_number = db.Column(db.String(11), unique = True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    first_name = db.Column(db.String(10))
    last_name = db.Column(db.String(10))
    age = db.Column(db.String(10))
    has_updated_age_first_time = db.Column(db.Boolean, nullable=True, default=False)
    image_file = db.Column(db.String(355), nullable = False, default = 'default1.jpg')

    # admin = db.Column(db.Boolean, nullable=False, default=False)

    paid = db.Column(db.Boolean, nullable=False, default=False)

    generic = db.Column(db.Boolean, nullable=False, default=False)

    is_student = db.Column(db.Boolean, nullable=True, default=False)

    online_status = db.Column(db.Text, default='offline')

    department = db.Column(db.String(), default = 'Undecided')

    level = db.Column(db.String(), default = 'Undecided')

    relationship_status = db.Column(db.String(), default = 'Undecided')

    address =  db.Column(db.Text, default = 'Undecided')

    chat_session_id =  db.Column(db.Text)

    is_admin = db.Column(db.Boolean, nullable=True, default=False)

    allows_phone_number_to_be_seen = db.Column(db.Boolean, nullable=True, default=True)

    allows_email_to_be_seen = db.Column(db.Boolean, nullable=True, default=True)

    has_aceepted_terms_and_conditions = db.Column(db.Boolean, nullable=False, default=False)


    last_login_at = db.Column(db.DateTime())
    current_login_at = db.Column(db.DateTime())
    last_login_ip = db.Column(db.String(100))
    current_login_ip = db.Column(db.String(100))
    login_count = db.Column(db.Integer)
    active = db.Column(db.Boolean())

    caption = db.Column(db.String(160),default='saying Hey there! i\'m a user of IM')
    more_about = db.Column(db.String(30000),default='saying Hey there! i\'m a user of IM')
    star_sign = db.Column(db.String(), default = 'Undecided')
    religion = db.Column(db.String(), default = 'Undecided')
    gender = db.Column(db.String(), default = 'Undecided')
    birth_day = db.Column(db.DateTime())
    likes =  db.Column(db.String(), default = 'Undecided')
    dislikes =  db.Column(db.String(), default = 'Undecided')
    budget =  db.Column(db.String(), default = 'Undecided')

    payment_intro_viewed_count = db.Column(db.Integer)

    account_numbers =  db.Column(db.Text, default = (


json.dumps(

                    { "account_numbers":  


                            [


                                {"bank_name": " ", "account_name": " ", "account_number": " "   }
                                                                    

                            ]  


                    }         


                                                                                                              
            )#json.dumps


        )#default()



                        )#db.column
















    seeks_roomate = db.Column(db.Boolean(), default = True)


    

    confirmed_at = db.Column(db.DateTime(), nullable=True)





    #RELATIONSHIPS

    # followers table
    followed = db.relationship(

        'User', secondary=followers,

        primaryjoin=(followers.c.follower_id == id),

        secondaryjoin=(followers.c.followed_id == id),

        backref=db.backref('followers', lazy='dynamic'), lazy='dynamic')


    # roomies table, this relationship connects two roomies to the roomies to the roomies table such that it can expos the request sender and the requested user
    is_roomies_with = db.relationship(

        'User', secondary=roomies,

        primaryjoin=(roomies.c.roomie_follower == id),

        secondaryjoin=(roomies.c.roomie_followed == id),

        backref=db.backref('roomie_followers', lazy='dynamic'), lazy='dynamic')




    # roomie_request relationship, this relationship connects two roomies to the roomie requests table such that it can expos the request sender and the requested user



    has_requested_to_be_roomies_with = db.relationship(

        'User', secondary=roomie_request,

        primaryjoin=(roomie_request.c.request_sender_id == id),

        secondaryjoin=(roomie_request.c.requested_user_id == id),

        backref=db.backref('roomie_requesters', lazy='dynamic'), lazy='dynamic')


    # ...




    # clainers table
    followed_claimers = db.relationship(

        'User', secondary=new_claimers,

        primaryjoin=(new_claimers.c.claimer_id == id),

        secondaryjoin=(new_claimers.c.finder_id == id),

        backref=db.backref('claiming_followers', lazy='dynamic'), lazy='dynamic')




    # messages relationship that links to the message sender and reciever


    messages_sent = db.relationship('Message',
                                    foreign_keys='Message.sender_id',
                                    backref='author', lazy='dynamic')

    messages_received = db.relationship('Message',
                                        foreign_keys='Message.recipient_id',
                                        backref='recipient', lazy='dynamic')



    claim_messages_sent = db.relationship('Claimers_messages',
                                    foreign_keys='Claimers_messages.sender_id',
                                    backref='claimer_sender', lazy='dynamic')

    claim_messages_received = db.relationship('Claimers_messages',
                                        foreign_keys='Claimers_messages.recipient_id',
                                        backref='Claimer_recipient', lazy='dynamic')



    last_message_read_time = db.Column(db.DateTime())

    last_notifications_read_time = db.Column(db.DateTime())


    # for new_claimers_messages section
    last_claimers_messages_read_time = db.Column(db.DateTime())
    # ...





    posts = db.relationship('Post', foreign_keys='Post.user_id', backref='author',lazy="dynamic")
 

    sponsored_posts = db.relationship('Sponsored_post', foreign_keys='Sponsored_post.user_id', backref='author',lazy="dynamic")
 

    sponsored_posts_comments = db.relationship('Sponsored_post_comment', foreign_keys='Sponsored_post_comment.author_id', backref='commentor',lazy="dynamic")
 

    bidding_posts = db.relationship('Bidding_posts', foreign_keys='Bidding_posts.user_id', backref='author',lazy="dynamic")
 

    saved_items = db.relationship('Saved_items', foreign_keys='Saved_items.user_id', backref='author',lazy="dynamic")
 

    viewed_posts = db.relationship('Viewed_Posts', backref='viewer',lazy=True)


    reported_posts = db.relationship('Reported_Post', backref='reporter',lazy=True)


    specific_message_read_time = db.relationship('Specific_Message_Read_Time',
    foreign_keys='Specific_Message_Read_Time.message_sender_id',
     backref='messages_sender',lazy='dynamic')


    claimers_Specific_Message_Read_Time = db.relationship('Claimers_Specific_Message_Read_Time',
    foreign_keys='Claimers_Specific_Message_Read_Time.message_sender_id',
     backref='messages_sender',lazy='dynamic')



    roomies = db.relationship('Roomie', backref='candidate',lazy=True)

    comments = db.relationship('Comments', backref='commentor',lazy=True)




    # BUY IM RELATIONSHIPS

    ads = db.relationship('E_commerce', backref='seller',lazy=True)



    notifications = db.relationship('Notification', backref='user',
                                    lazy='dynamic')


    activity = db.relationship('Activity', backref='user',
                                    lazy='dynamic')


    credit_cards = db.relationship('Credit_Cards', backref='card_owner',
                                    lazy='dynamic')

    hashtags = db.relationship('Hashtag', foreign_keys='Hashtag.user_id', backref='author',lazy="dynamic")
 

    hashtag_counter = db.relationship('Hashtag_counter', foreign_keys='Hashtag_counter.user_id', backref='author',lazy="dynamic")
 

    roles = db.relationship('Role', secondary = roles_users, backref=db.backref('users', lazy='dynamic'))










    #DATABASE DEFINITIONS



    # NEW NOTIFICATIONS DEFINITIONS


    def add_notification(self, name, data):
        self.notifications.filter_by(name=name).delete()
        n = Notification(name=name, user=self, data = data)
        db.session.add(n)
        return n

    def new_notifications(self):
        last_notifications_read_time = self.last_notifications_read_time or datetime(1900, 1, 1)

        return Notification.query.filter_by(user_id=self.id).filter(
            Notification.timestamp > last_notifications_read_time).order_by( Notification.timestamp.desc() ).limit(50)


    def new_notifications_count(self):
        last_notifications_read_time = self.last_notifications_read_time or datetime(1900, 1, 1)
        return Notification.query.filter_by(user_id=self.id).filter(
            Notification.timestamp > last_notifications_read_time).count()





    # NEW ACTIVITY DEFINITIONS


    def add_activity(self, category, description, action_performer_id):

        a = Activity(category=category, 
                    user=self, 
                    description = description, 
                    action_performer_id = action_performer_id, 
                    action_reciever_id = action_reciever_id)

        db.session.add(a)
        return a

    def all_activities(self):
        return Activity.query.filter_by(user_id=self.id).all()







    # GENERIC DEFINITIONS

    def highlight(self, text, keyword):
        
        text = text.replace(keyword, "<span class = 'green'> " + keyword + "</span>")
        
        return render_template("home/empty.html", data = text ) 



    def highlight_one(self, text, keyword):
        replacement = "<span class = 'green'>" + keyword + "</span>"
        text = re.sub(re.escape(keyword), replacement, text, flags=re.I)
        print(str(text), '\n')
        return text #render_template("home/empty.html", data = text ) 




    # function to print all the hashtags in a text
    def extract_hashtags_for_html(self, text):
        
        # the regular expression
        regex = "#(\w+)"
        
        # extracting the hashtags
        hashtag_list = re.findall(regex, text)

        #print(' hashtag_list--> ', hashtag_list)

        hashtag_raw = []


        text_broken_into_words = text.split()

        for hashtag in hashtag_list:

            for word in text_broken_into_words:
                #_word = word.replace('#', '').strip() 

                if hashtag == word[1:] :
                    # print( 'index--->', text_broken_into_words.index(word))
                    # pos = text_broken_into_words.index(word)
                    # text_broken_into_words.insert(pos, "<span class='hashtag_highlight'>" + word + "</span>")
                    # text_broken_into_words.remove(word)
                    #print('appending hashtag---.>', word)
                    hashtag_raw.append(word)

        # print('wordlist-->',text_broken_into_words, '\n')

        # print('wordlist as a string-->',' '.join(text_broken_into_words), '\n')

        # wordlist_as_string = ' '.join(text_broken_into_words)
        print('\n hashtag_list--> ', hashtag_raw)


        return hashtag_raw #render_template("home/empty.html", data = text )






    # POST VIEW DEFINITIONS
    def has_viewed_post(self, post_id):
        return Viewed_Posts.query.filter_by(viewer = self, post_id=post_id).count()>0


    def has_reported_post(self, post_id):
        return Reported_Post.query.filter_by(reporter = self, post_id=post_id).count()>0


    def has_tried_to_claim_post(self, post_id):
        return claimers.query.filter_by(claimer_id = self.id, post_id=post_id).count()>0


    def view_post(self, post_id):

        if self.has_viewed_post(post_id):
            pass

        else:
            post_view = Viewed_Posts(
                        post_id = post_id,
                        viewer = self
                        )


            db.session.add(post_view)
            db.session.commit()

        return 


    def get_post(self, post_id):

        post = Post.query.get_or_404(post_id)

        return post






























    # NEW MESSAGES COUNT DEFINITIONS
    def new_messages(self):

        last_read_time = self.last_message_read_time or datetime(1900, 1, 1)

        return Message.query.filter_by(recipient=self).filter(
            Message.timestamp > last_read_time).count()


    def specific_new_messages_from(self, user):

        specifc_msg = Specific_Message_Read_Time.query.filter_by(messages_sender = user).first()
        # print(specifc_msg)


        last_read_time = datetime(1900, 1, 1)
        try:
            last_read_time = specifc_msg.last_read_time or datetime(1900, 1, 1)
    
        except AttributeError:
            pass

        # last_read_time = specifc_msg.last_read_time or datetime(1900, 1, 1)


        # print(Message.query.filter_by(recipient=self).filter(
        #     Message.timestamp > last_read_time).count())


        return Message.query.filter_by(author = user, recipient = self).filter(
            Message.timestamp > last_read_time).count()





















    # NORMAL FOLLOWER DEFINITIONS
    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)

    def is_following(self, user):
        return self.followed.filter(followers.c.followed_id == user.id).count() > 0


    def followed_posts(self):
        return Post.query.join(
            followers, (followers.c.followed_id == Post.user_id)).filter(
                followers.c.follower_id == self.id).order_by(
                    Post.date_posted.desc())

    def ordered_followed_posts(self):
        return Post.query.join(
            followers, (followers.c.followed_id == Post.user_id)).filter(followers.c.follower_id == self.id).join(User, (User.id == Post.user_id)).order_by(User.paid.desc()).order_by(
                    Post.date_posted.desc())

    def has_no_followed_posts(self):
        return Post.query.join(
            followers, (followers.c.followed_id == Post.user_id)).filter(followers.c.follower_id == self.id).join(User, (User.id == Post.user_id)).order_by(User.paid.desc()).order_by(
                    Post.date_posted.desc()).count() < 1





    # CLAIMER  DEFINITIONS
    def follow_finder(self, user):
        if not self.is_following_finder(user):
            self.followed_claimers.append(user)

    def unfollow_finder(self, user):
        if self.is_following_finder(user):
            self.followed_claimers.remove(user)

    def is_following_finder(self, user):
        return self.followed_claimers.filter(new_claimers.c.finder_id == user.id).count() > 0

    def is_following_finder_or_is_the_finder(self, user):
        return user in self.claiming_followers.union( self.followed_claimers)


    def claimer_author_instance(self,id):
        author = User.query.get(id)

        return author

    def has_tried_to_claim(self, id):
        return claimers.query.filter_by(claimer_id = self.id, post_id = id).count()>0






    def new_claimer_messages_count(self):

        last_read_time = self.last_claimers_messages_read_time or datetime(1900, 1, 1)

        return Claimers_messages.query.filter_by(Claimer_recipient=self).filter(
            Claimers_messages.date_of_message > last_read_time).count()


    def specific_new_claimer_messages_from(self, user, post_id):

        specifc_msg = Claimers_Specific_Message_Read_Time.query.filter_by(messages_sender = user).filter(Claimers_Specific_Message_Read_Time.post_id == post_id).first()

        last_read_time = datetime(1900, 1, 1)

        try:
            last_read_time = specifc_msg.last_read_time or datetime(1900, 1, 1)
    
        except AttributeError:
            pass


        return Claimers_messages.query.filter_by(claimer_sender = user, Claimer_recipient = self).filter(
            Claimers_messages.date_of_message > last_read_time).filter(Claimers_messages.post_id == post_id).count()







    # ROOMIE REQUESTS DEFINITIONS
    def request_roomie(self, user):
        if not self.has_sent_roomie_request_to(user):
            self.has_requested_to_be_roomies_with.append(user)

    def unrequest_roomie(self, user):
        if self.has_sent_roomie_request_to(user):
            self.has_requested_to_be_roomies_with.remove(user)

    def has_sent_roomie_request_to(self, user):
        return self.has_requested_to_be_roomies_with.filter(roomie_request.c.requested_user_id == user.id).count() > 0





    # ROOMIE FOLLOWER DEFINITIONS
    def follow_roomie(self, user):
        if not self.is_following_roomie(user):
            self.is_roomies_with.append(user)

    def unfollow_roomie(self, user):
        if self.is_following_roomie(user):
            self.is_roomies_with.remove(user)

    def is_following_roomie(self, user):
        return self.is_roomies_with.filter(roomies.c.roomie_followed == user.id).count() > 0

    def all_roomies_count(self):
        return self.roomie_followers.union(self.is_roomies_with).count()

    def is_following_or_followed_by(self, user):
        return user in self.roomie_followers.union( self.is_roomies_with)


    def random_hex(self):
        out = str(secrets.token_hex(8))   
        return out














#############################################################################################################################################################################
############################################################################# CREDIT CARDS MODEL ##############################################################################
#############################################################################################################################################################################



class Credit_Cards(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cardno = db.Column(db.String() )
    cvv = db.Column(db.String() )
    expirymonth = db.Column(db.String() )
    expiryyear = db.Column(db.String() )
    amount = db.Column(db.Integer() )
    firstname = db.Column(db.String() )
    lastname = db.Column(db.String() )
    date_saved = db.Column(db.DateTime(), index=True, default=datetime.now())
    authorization_code = db.Column(db.Text)


    #RELATIONSHIP
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    


    def __repr__(self):
        return '< credit card {} {}>'.format(self.firstname, self.cardno)











#############################################################################################################################################################################
############################################################################# NOTIFICATION MODEL ##############################################################################
#############################################################################################################################################################################



class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), index=True)
    data = db.Column(db.String(128), index=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    timestamp = db.Column(db.DateTime(), index=True, default=datetime.now())


    def __repr__(self):
        return '<New notification {}>'.format(self.name)






#############################################################################################################################################################################
############################################################################# Activity MODEL ##############################################################################
#############################################################################################################################################################################



class Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(), index=True)
    action_performer_id = db.Column(db.Integer)
    action_reciever_id = db.Column(db.Integer)
    description = db.Column(db.String())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    timestamp = db.Column(db.DateTime(), index=True, default=datetime.now())


    def __repr__(self):
        return '< Activity {}, {}, {} >'.format(self.id, self.category, self.action_performer_id)

















#######################################################################################################################################################################
######################################################################### ROOMIE IM MODELS #########################################################################
#######################################################################################################################################################################


# database for people who are looking for a roomate
class Roomie(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    date_joined = db.Column(db.DateTime(), nullable = False)
    religion =  db.Column(db.String(150), default='unset')
    level =  db.Column(db.String(150), default='unset')
    based =  db.Column(db.String(150), default='unset')
    budget =  db.Column(db.String(150))


    birth_day = db.Column(db.String(20),default='unset')
    likes =  db.Column(db.String(150),default='unset')
    dislikes =  db.Column(db.String(150),default='unset')


    #RELATIONSHIP
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    
    def __repr__(self):
        return f" Roomie('{self.level}', '{self.date_joined}', '{self.budget}') "







# TRACKS HE LAST TIME A ROOMIE READ ANOTHER ROOMIE'S MESSAGE AND THAT ROOMIE IS STORED HERE AS THE message_sender_id
class Specific_Message_Read_Time(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message_sender_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    last_read_time = db.Column(db.DateTime(), default = datetime.now())

    def __repr__(self):
        return f" Specific_Message_Read_Time('{self.message_sender_id}', '{self.last_read_time}') "


# stores all messages sent and recieved for roomie IM
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    recipient_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    body = db.Column(db.Text)
    timestamp = db.Column(db.DateTime(), index=True, default=datetime.now())
    reference_code = db.Column(db.Text)
    image_file =  db.Column(db.Text)
    post_id = db.Column(db.Integer)

    
    def __repr__(self):
        return '<Message {}>'.format(self.body)




# stores all hashtag sent and recieved for roomie IM
class Hashtag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hashtag_name = db.Column(db.Text)
    timestamp = db.Column(db.DateTime(), index=True, default=datetime.now())
    reference_code = db.Column(db.Text)

    #RELATIONSHIP
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    
    
    def __repr__(self):
        return '<hashtag {}>'.format(self.body)



# stores all hashtag sent and recieved for roomie IM
class Hashtag_counter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hashtag_name = db.Column(db.Text)
    first_mention_time = db.Column(db.DateTime(), index=True, default=datetime.now())
    hashtag_mention_count = db.Column(db.Integer)

    #RELATIONSHIP
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    
    
    def __repr__(self):
        return '<hashtag_counter {}>'.format(self.body)












#######################################################################################################################################################################
########################################################################## POST IM MODELS ##########################################################################
#######################################################################################################################################################################




class Comments(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    comment_body = db.Column(db.Text)
    date_of_comment = db.Column(db.DateTime(), nullable = False, default = datetime.now())
    post_id =  db.Column(db.Integer, unique = False, nullable = False)
    
    #RELATIONSHIP
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)


    def __repr__(self):
        return f" Comments ('{self.comment_body}', '{self.date_of_comment}') "




class Sponsored_post_comment(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    comment_body = db.Column(db.Text)
    date_of_comment = db.Column(db.DateTime(), nullable = False, default = datetime.now())
    post_id =  db.Column(db.Integer, unique = False, nullable = False)
    
    #RELATIONSHIP
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)


    def __repr__(self):
        return f" Sponsored_post_comment ('{self.comment_body}', '{self.date_of_comment}') "






class Post(db.Model):


    __searchable__ = ['title', 'content']

    id = db.Column(db.Integer,primary_key = True)
    image_file = db.Column(db.String(355), nullable = False, default = 'default_post.jpg')
    title = db.Column(db.Text)
    date_posted = db.Column(db.DateTime(), nullable = False, default = datetime.now())
    date_claimed = db.Column(db.DateTime(), nullable=True)
    content = db.Column(db.Text)
    link = db.Column(db.String(30000), unique = False, nullable = True)
    venue = db.Column(db.String(100), unique = False, nullable = True)
    date = db.Column(db.DateTime(), nullable=True)
    date2 = db.Column(db.DateTime(), nullable=True)
    is_event =  db.Column(db.Boolean, nullable=False, default=False)
    possession =  db.Column(db.Boolean, nullable=True, default=False)
    is_Lost_and_found =  db.Column(db.Boolean, nullable=True, default=False)
    is_Lost_and_searching =  db.Column(db.Boolean, nullable=True, default=False)
    is_claimed = db.Column(db.Boolean, nullable=True, default=False)
    item_category = db.Column(db.String(30000), nullable = True)
    edit_count = db.Column(db.Integer, default = 0 )
    reference_code = db.Column(db.Text)

    #RELATIONSHIP
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    claimer_id = db.Column(db.Integer)


    def views_count(self):
        return Viewed_Posts.query.filter_by(post_id = self.id).count()


    def comments_count(self):
        return Comments.query.filter_by(post_id = self.id).count()


    def first_three_comments(self):
        return Comments.query.filter_by(post_id = self.id).order_by(Comments.date_of_comment.desc()).limit(4)



    def edit_counter(self):
        
        return Post.query.filter_by(id = self.id).first().edit_count





    def report_count(self):

        reported_post = Reported_Post.query.filter_by(post_id = self.id ).all()

        report_list = []

    
    # add all the rows in the database one by one

        for each in reported_post:
            if each.inappropriate_count is None:
                each.inappropriate_count = 0

            if each.offensive_count is None:
                each.offensive_count = 0

            if each.hate_speech_count is None:
                each.hate_speech_count = 0

            if each.inaccurate_info_count is None:
                each.inaccurate_info_count= 0

            add = each.inappropriate_count + each.offensive_count + each.hate_speech_count + each.inaccurate_info_count 
            val = int(add)
            report_list.append(val)

    # check if the number of reports is more than 10 and then delete the post 
        return sum(report_list)

    
    
    def __repr__(self):
        return f" Post('{self.content}', '{self.id}' , '{self.date_posted}') "








class Sponsored_post(db.Model):


    # __searchable__ = ['title']

    id = db.Column(db.Integer,primary_key = True)
    image_file = db.Column(db.String(355), nullable = False, default = 'default_post.jpg')
    date_posted = db.Column(db.DateTime(), nullable = False, default = datetime.now())
    content = db.Column(db.String(30000), unique = False, nullable = False)
    link = db.Column(db.String(30000), unique = False, nullable = True)
    venue = db.Column(db.String(100), unique = False, nullable = True)
    date = db.Column(db.DateTime(), nullable=True)
    is_event =  db.Column(db.Boolean, nullable=False, default=False)
    possession =  db.Column(db.Boolean, nullable=True, default=False)
    is_Lost_and_found =  db.Column(db.Boolean, nullable=True, default=False)
    is_Lost_and_searching =  db.Column(db.Boolean, nullable=True, default=False)
    is_claimed = db.Column(db.Boolean, nullable=True, default=False)
    item_category = db.Column(db.String(30000), nullable = True)

    #RELATIONSHIP
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)


    def __repr__(self):
        return f" Post('{self.content}', '{self.date_posted}') "







class Bidding_posts(db.Model):


    # __searchable__ = ['title']

    id = db.Column(db.Integer,primary_key = True)
    image_file = db.Column(db.String(355), nullable = False, default = 'default_post.jpg')
    date_posted = db.Column(db.DateTime(), nullable = False, default = datetime.now())
    content = db.Column(db.String(30000), unique = False, nullable = False)
    link = db.Column(db.String(30000), unique = False, nullable = True)
    venue = db.Column(db.String(100), unique = False, nullable = True)
    date = db.Column(db.DateTime(), nullable=True)
    is_event =  db.Column(db.Boolean, nullable=False, default=False)
    possession =  db.Column(db.Boolean, nullable=True, default=False)
    is_Lost_and_found =  db.Column(db.Boolean, nullable=True, default=False)
    is_Lost_and_searching =  db.Column(db.Boolean, nullable=True, default=False)
    is_claimed = db.Column(db.Boolean, nullable=True, default=False)
    item_category = db.Column(db.String(30000), nullable = True)

    #RELATIONSHIP
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)


    def __repr__(self):
        return f" Post('{self.content}', '{self.date_posted}') "






class Saved_items(db.Model):

    id = db.Column(db.Integer,primary_key = True)
    post_id =  db.Column(db.Integer, unique = True)
    image_file = db.Column(db.String(),  default = 'default1.jpg')
    saved_user =  db.Column(db.Integer )
    first_name =  db.Column(db.Text )
    paid = db.Column(db.Boolean, nullable=True, default=False)
    caption =  db.Column(db.Text )
    date = db.Column(db.DateTime(), nullable = True, default = datetime.now())
    description = db.Column(db.String(), nullable = True)
    post_category = db.Column(db.String(), nullable = True)

    #RELATIONSHIP
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)


    def __repr__(self):
        return f" Saved_item ('{self.saved_user}', '{self.post_id}', '{self.description}') "







class Viewed_Posts(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    post_id =  db.Column(db.Integer, unique = False, nullable = False)

    #RELATIONSHIP
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    
    def __repr__(self):
        return f" Post('{self.post_id}', '{self.user_id}') "



class Reported_Post(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    post_id =  db.Column(db.Integer, unique = False, nullable = False)
    report_type = db.Column(db.String(100), unique = False, nullable = False)

    inappropriate_count =  db.Column(db.Integer, unique = False)
    offensive_count =  db.Column(db.Integer, unique = False)    
    hate_speech_count =  db.Column(db.Integer, unique = False)
    inaccurate_info_count =  db.Column(db.Integer, unique = False)

    #RELATIONSHIP
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    
    def __repr__(self):
        return f" Post('{self.post_id}', '{self.user_id}',  '{self.inappropriate_count}', '{self.offensive_count}') "










class claimers(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    claimer_profile_pic = db.Column(db.String(355), nullable = False, default = 'default_post.jpg')
    claimer_name = db.Column(db.String(100), unique = False, nullable = False)
    date_of_application = db.Column(db.DateTime(), nullable = False, default = datetime.now())
    item_category = db.Column(db.String(30000), unique = False, nullable = False)
    email = db.Column(db.String(30000), unique = False, nullable = True)
    item_desription = db.Column(db.String(100), unique = False, nullable = True)
    post_id =  db.Column(db.Integer, unique = False, nullable = False)

    last_interaction_time = db.Column(db.DateTime(), nullable = True, default = datetime.now())


    #RELATIONSHIP

    author_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)

    claimer_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)



    def __repr__(self):
        return '<CLAIMERS ---> id   {},  {},   post_id {}>'.format( self.claimer_id, self.claimer_name, self.post_id )




# stores all messages sent and recieved for thise trying to claim to an item
class Claimers_messages(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)

    sender_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    recipient_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    message_body = db.Column(db.String(140))

    date_of_message = db.Column(db.DateTime(), index=True, default=datetime.now())

    post_id =  db.Column(db.Integer, unique = False, nullable = False)


    def __repr__(self):
        return '\n<Message {}>'.format(self.message_body)




class Claimers_Specific_Message_Read_Time(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message_sender_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    last_read_time = db.Column(db.DateTime(), default = datetime.now())
    post_id =  db.Column(db.Integer, unique = False, nullable = False)

    def __repr__(self):
        return f" claimer_Specific_Message_Read_Time('{self.message_sender_id}', '{self.last_read_time}') "





#######################################################################################################################################################################
########################################################################## LIGHT IM MODELS #########################################################################
#######################################################################################################################################################################






# the historical database that stores all the light fluctuatioin events in the databasee for the light IM route
class Light_IM(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    location = db.Column(db.String(150), nullable = False)
    period = db.Column(db.DateTime(), nullable = False, default = datetime.now())
    state =  db.Column(db.String(150), default='off')

    
    def __repr__(self):
        return f" Light_IM('{self.location}', '{self.period}') "





# the single row database that updates the light IM routes with the current state of electricity
class Light_IM_update(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    location = db.Column(db.String(150), nullable = False)
    period = db.Column(db.DateTime(), nullable = False, default = datetime.now())
    state =  db.Column(db.String(150), default='off')

    
    def __repr__(self):
        return f" Light_IM_update('{self.location}', '{self.period}') "











#############################################################################################################################################################################
############################################################################# ECOMMERCE MODEL ##############################################################################
#############################################################################################################################################################################



class E_commerce(db.Model):
    id = db.Column(db.Integer,primary_key = True) 

    
    title =  db.Column(db.String(1500), nullable = True)

    image_files = db.Column( db.ARRAY(db.String(1500)) )

    date_of_post = db.Column(db.DateTime(), nullable = True, default = datetime.now())

    price =  db.Column(db.Integer,  nullable = True)

    brand =  db.Column(db.String(1500), nullable = True)

    condition =  db.Column(db.String(1500), nullable = True)

    ram =  db.Column(db.String(1500), nullable = True)

    screen_size =  db.Column(db.String(1500), nullable = True)

    colour =  db.Column(db.String(1500), nullable = True)

    camera =  db.Column(db.String(1500), nullable = True)

    description = db.Column(db.Text)    

    storage_capacity =  db.Column(db.String(1500), nullable = True)

    operating_system =  db.Column(db.String(1500), nullable = True)

    type = db.Column(db.String(1500), nullable = True)

    subtype =  db.Column(db.String(1500), nullable = True)

    processor =  db.Column(db.String(1500), nullable = True)

    number_of_cores =  db.Column(db.String(1500), nullable = True)

    graphics_card =  db.Column(db.String(1500), nullable = True)

    graphics_card_memory =  db.Column(db.String(1500), nullable = True)

    storage_type =  db.Column(db.String(1500), nullable = True)

    operating_system =  db.Column(db.String(1500), nullable = True)

    make =  db.Column(db.String(1500), nullable = True)

    platform =  db.Column(db.String(1500), nullable = True)

    format =  db.Column(db.String(1500), nullable = True) 

    gender =  db.Column(db.String(1500), nullable = True)

    size =  db.Column(db.String(1500), nullable = True)

    style =  db.Column(db.String(1500), nullable = True)

    upper_material =  db.Column(db.String(1500), nullable = True)

    outsole_material =  db.Column(db.String(1500), nullable = True)   

    material =  db.Column(db.String(1500), nullable = True)

    closure =  db.Column(db.String(1500), nullable = True) 

    main_material =  db.Column(db.String(1500), nullable = True)

    main_stone =  db.Column(db.String(1500), nullable = True) 

    formulation =  db.Column(db.String(1500), nullable = True)

    scent =  db.Column(db.String(1500), nullable = True)

    volume =  db.Column(db.String(1500), nullable = True)

    tone =  db.Column(db.String(1500), nullable = True) 

    target_area =  db.Column(db.String(1500), nullable = True) 

    skin_type = db.Column(db.String(1500), nullable = True)

    benefits = db.Column(db.String(1500), nullable = True) 

    level =  db.Column(db.String(1500), nullable = True)

    duration =  db.Column(db.String(1500), nullable = True)

    service_features =  db.Column(db.String(1500), nullable = True)

    round_the_clock_service = db.Column(db.Boolean())

    type_of_service =  db.Column(db.String(1500), nullable = True)  

    service_include =  db.Column(db.String(1500), nullable = True)  

    year_of_manufacture =  db.Column(db.String(1500), nullable = True)

    transmission =  db.Column(db.String(1500), nullable = True)

    mileage =  db.Column(db.String(1500), nullable = True) 

    ad_type = db.Column(db.String(1500), nullable = True)





#RELATIONSHIP
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)

  
    def __repr__(self):
        return f" < E_commerce  ('{self.id}', {self.price},'{self.title}', {self.description}', '{self.condition}', '{self.camera}',  '{self.screen_size}') > \n\n"






