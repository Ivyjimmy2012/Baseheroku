from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, url
from wtforms import Form, BooleanField, StringField, IntegerField, PasswordField, validators, TextAreaField, DateField, SelectField, SubmitField, RadioField
from wtforms.fields.html5 import URLField
from wtforms.fields import  MultipleFileField
from flask_security import current_user
from flask_security.forms import LoginForm, RegisterForm, StringField, Required, BooleanField,Length
from flask import session



#####################################
######### USER FORMS ################
#####################################




# my custom login form that sets session to x amount of minutes
class CustomLoginForm(LoginForm):
    def validate(self): 
        response = super(CustomLoginForm, self).validate()
        session.permanent = True
        return response


# adding other form fields to the sign up form e.g first name and last name
class ExtendedRegisterForm(RegisterForm):
    
    first_name = StringField('First Name')

    last_name = StringField('Last Name')







#####################################
######### COMMENT FORM #########
#####################################

class CommentForm(FlaskForm):
    comment = TextAreaField('Write a comment ', [validators.Length(min=3, max=160)])





#####################################
######### MESSAGE FORM #########
#####################################

class MessageForm(FlaskForm):
    message = TextAreaField((''))


#####################################
######### EDIT PROFILE FORMS #########
#####################################

class CaptionForm(FlaskForm):
    caption = TextAreaField('Your Caption ', [validators.Length(min=3, max=160)])


class MoreAboutForm(FlaskForm):
    more_about = TextAreaField('Write More About Yourself', [validators.Length(min=3, max=300)])
    
   
class BirthDayForm(FlaskForm):
    birth_day = StringField('Birth Day(you can add just the month and day)', [validators.Length(min=5, max=20)])


class LikesForm(FlaskForm):
    likes = StringField('Likes', [validators.Length(min=3, max=150)])


class DislikesForm(FlaskForm):
    dislikes = StringField('Dislikes', [validators.Length(min=3, max=150)])


class PhoneForm(FlaskForm):
    phone = StringField('Phone Number', [validators.Length(min=11, max=11)])


class WhatssapForm(FlaskForm):
    phone = StringField('Whatssap Number', [validators.Length(min=11, max=11)])


class AddressForm(FlaskForm):
    address = StringField('Address', [validators.Length(min=3, max=150)])








#####################################
########## POST IM FORMS #########
#####################################

# POST ANNOUNCEMENT FORM
class PostForm(FlaskForm):

    answers = [('Yes', 'Yes'),
            ('No', 'No')
           ]


    # banks = [('Gt bank', 'Gt bank'),
    #         ('Access bank', 'Access bank')
    #        ]


    banks = [

("ALAT by Wema","ALAT by Wema"),
("Access Bank PLC","Access Bank PLC"),
("Aso Savings","Aso Savings"),
("Ecobank","Ecobank"),
("Ekondo Microfinance Bank","Ekondo Microfinance Bank"),
("Fidelity Bank Nigeria","Fidelity Bank Nigeria"),
("First Bank Nigeria","First Bank Nigeria"),
("First City Monument Bank Ltd","First City Monument Bank Ltd"),
("Guaranty Trust Bank","Guaranty Trust Bank"),
("Heritage Bank PLC","Heritage Bank PLC"),
("Keystone Bank Limited","Keystone Bank Limited"),
("Mainstreet Bank","Mainstreet Bank"),
("Polaris Bank","Polaris Bank"),
("Stanbic IBTC Bank","Stanbic IBTC Bank"),
("Sterling Bank Plc","Sterling Bank Plc"),
("Union Bank Nigeria","Union Bank Nigeria"),
("United Bank for Africa","United Bank for Africa"),
("Wema Bank","Wema Bank"),
("Zenith Bank","Zenith Bank"),

]




    old_banks = [

    ("Access Bank", "Access Bank" ) ,
    ("Citibank", "Citibank" ) ,
    ("Diamond Bank", "Diamond Bank" ) ,
    ("Dynamic Standard Bank", "Dynamic Standard Bank" ) ,
    ("Ecobank Nigeria", "Ecobank Nigeria" ) ,
    ("Fidelity Bank Nigeria", "Fidelity Bank Nigeria" ) ,
    ("First Bank of Nigeria", "First Bank of Nigeria" ) ,
    ("First City Monument Bank", "First City Monument Bank" ) ,
    ("Guaranty Trust Bank", "Guaranty Trust Bank" ) ,
    ("Heritage Bank Plc", "Heritage Bank Plc" ) ,
    ("Jaiz Bank", "Jaiz Bank" ) ,
    ("Keystone Bank Limited", "Keystone Bank Limited" ) ,
    ("Providus Bank Plc", "Providus Bank Plc" ) ,
    ("Polaris Bank", "Polaris Bank" ) ,
    ("Stanbic IBTC Bank Nigeria Limited", "Stanbic IBTC Bank Nigeria Limited" ) ,
    ("Standard Chartered Bank", "Standard Chartered Bank" ) ,
    ("Sterling Bank", "Sterling Bank" ) ,
    ("Suntrust Bank Nigeria Limited", "Suntrust Bank Nigeria Limited" ) ,
    ("Union Bank of Nigeria", "Union Bank of Nigeria" ) ,
    ("United Bank for Africa", "United Bank for Africa" ) ,
    ("Unity Bank Plc", "Unity Bank Plc" ) ,
    ("Wema Bank", "Wema Bank" ) ,
    ("Zenith Bank", "Zenith Bank" ) 


    ]



    title = StringField(' ')

    event_indicator = StringField(' ')

    fundraiser_indicator = StringField(' ')

    lost_item_indicator = TextAreaField(' ' )

    found_item_indicator = TextAreaField(' ' )

    add_account_indicator = StringField(' ')

    normal_post_indicator = TextAreaField(' ' )

    price = IntegerField(' ')

    venue = StringField(' ')

    content = TextAreaField(' ')

    photo = FileField('' )

    insert_pic = FileField('' )

    possession = SelectField('',    choices = answers, default = 'Yes' )

    bank = SelectField('',    choices = banks, default = 'Guaranty Trust Bank' )











# POST EDIT FORM
class EditPostForm(FlaskForm):

    new_content = TextAreaField(' ')







class ProfileForm(FlaskForm):


    star_signs =    [

                        ("♈ aries","♈ aries"),
                        (" ♉ taurus"," ♉ taurus"),
                        (" ♊ gemini"," ♊ gemini"),
                        (" ♋ cancer"," ♋ cancer"),
                        (" ♌ leo"," ♌ leo"),
                        (" ♌ leo"," ♌ leo"),
                        (" ♍ virgo"," ♍ virgo"),
                        (" ♎ libra"," ♎ libra"),
                        (" ♏ scorpio"," ♏ scorpio"),
                        (" ♐ sagittarius"," ♐ sagittarius"),
                        (" ♑ capricorn"," ♑ capricorn"),
                        (" ♒ aquarius"," ♒ aquarius"),
                        (" ♓ pisces"," ♓ pisces")

                ]






    price_range = [('Greater than 10k', 'Greater than 10k'),
                ('Greater than 20k', 'Greater than 20k'),
                ('Greater than 30k', 'Greater than 30k'),
                ('Greater than 40k', 'Greater than 40k'),
                ('50k and above', '50k and above')
               ]


    relationships=[

("single", 'single'),
("searching", 'searching'),
("complicated", 'complicated'),
("im an engineering Student ", 'im an engineering Student '),
("in an abusive relationship ", 'in an abusive relationship'),
("i currently dont have the time ", 'i currently dont have the time '),
("waiting for someone", 'waiting for someone')


    ]



    levels=[

("high school graduate", 'high school graduate'),
("fresher", 'fresher'),
("200L", '200L'),
("300L", '300L'),
("400L", '400L'),
("final year", 'final year'),
("alumni", 'alumni')


    ]



    answers=[

("YES", 'YES'),
("NO", 'NO')


    ]




    departments = [

("AGRIC-ECONOMICS AND EXTENSION" , 'AGRIC-ECONOMICS AND EXTENSION'),
("AGRICULTURAL AND BIORESOURCES ENGINEERING" , 'AGRICULTURAL AND BIORESOURCES ENGINEERING'),
("AGRICULTURE" , 'AGRICULTURE'),
("ANIMAL PRODUCTION" , 'ANIMAL PRODUCTION'),
("APPLIED GEOPHYSICS" , 'APPLIED GEOPHYSICS'),
("ARCHITECTURE" , 'ARCHITECTURE'),
("BIOCHEMISTRY" , 'BIOCHEMISTRY'),
("BIOLOGY" , 'BIOLOGY'),
("BOTANY" , 'BOTANY'),
("BUILDING" , 'BUILDING'),
("CHEMICAL ENGINEERING:" , 'CHEMICAL ENGINEERING:'),
("CHEMISTRY" , 'CHEMISTRY'),
("CIVIL ENGINEERING" , 'CIVIL ENGINEERING'),
("COMPUTER ENGINEERING:" , 'COMPUTER ENGINEERING:'),
("COMPUTER SCIENCE" , 'COMPUTER SCIENCE'),
("COMPUTER WITH STATISTICS" , 'COMPUTER WITH STATISTICS'),
("CROP PRODUCTION" , 'CROP PRODUCTION'),
("CYBER SECURITY SCIENCE" , 'CYBER SECURITY SCIENCE'),
("EDUCATION AND BIOLOGY" , 'EDUCATION AND BIOLOGY'),
("EDUCATION AND CHEMISTRY:" , 'EDUCATION AND CHEMISTRY:'),
("EDUCATION AND GEOGRAPHY" , 'EDUCATION AND GEOGRAPHY'),
("EDUCATION AND MATHEMATICS" , 'EDUCATION AND MATHEMATICS'),
("EDUCATION AND PHYSICS" , 'EDUCATION AND PHYSICS'),
("EDUCATION AND SCIENCE" , 'EDUCATION AND SCIENCE'),
("EDUCATION TECHNOLOGY" , 'EDUCATION TECHNOLOGY'),
("ELECTRICAL AND COMPUTER ENGINEERING" , 'ELECTRICAL AND COMPUTER ENGINEERING'),
("ESTATE MANAGEMENT" , 'ESTATE MANAGEMENT'),
("FISHERIES AND AQUACULTURE:" , 'FISHERIES AND AQUACULTURE:'),
("FOOD SCIENCE AND TECHNOLOGY" , 'FOOD SCIENCE AND TECHNOLOGY'),
("GEOGRAPHY" , 'GEOGRAPHY'),
("GEOLOGY" , 'GEOLOGY'),
("HORTICULTURE:" , 'HORTICULTURE:'),
("INDUSTRIAL EDUCATION TECHNOLOGY" , 'INDUSTRIAL EDUCATION TECHNOLOGY'),
("INFORMATION AND MEDIA TECHNOLOGY" , 'INFORMATION AND MEDIA TECHNOLOGY'),
("MATHEMATICS WITH COMPUTER SCIENCE" , 'MATHEMATICS WITH COMPUTER SCIENCE'),
("MATHEMATICS WITH STATISTICS" , 'MATHEMATICS WITH STATISTICS'),
("MECHANICAL ENGINEERING" , 'MECHANICAL ENGINEERING'),
("MECHATRONICS ENGINEERING" , 'MECHATRONICS ENGINEERING'),
("METALLURGICAL AND MATERIAL ENGINEERING" , 'METALLURGICAL AND MATERIAL ENGINEERING'),
("MICROBIOLOGY" , 'MICROBIOLOGY'),
("PHYSICS" , 'PHYSICS'),
("QUANTITY SURVEYING" , 'QUANTITY SURVEYING'),
("SCIENCE EDUCATION" , 'SCIENCE EDUCATION'),
("STATISTICS" , 'STATISTICS'),
("SURVEYING AND GEOINFORMATICS" , 'SURVEYING AND GEOINFORMATICS'),
("TELECOMMUNICATION ENGINEERING" , 'TELECOMMUNICATION ENGINEERING'),
("URBAN AND REGIONAL PLANNING:" , 'URBAN AND REGIONAL PLANNING:'),
("WATER RESOURCES, AQUACULTURE AND FISHERIES TECHNOLOGY" , 'WATER RESOURCES, AQUACULTURE AND FISHERIES TECHNOLOGY'),
("ZOOLOGY" , 'ZOOLOGY')


           ]



    religions = [

('Atheism', 'Atheism'),
('Buddhism', 'Buddhism'       ),
('Christianity', 'Christianity'   ),
('Confucianism', 'Confucianism'            ),
('Hinduism', 'Hinduism'        ),
('Islam', 'Islam'  ),
('Jainism', 'Jainism'     ),
('Judaism', 'Judaism' ),
('Sikhism', 'Sikhism'    ),
('Shintoism', 'Shintoism'           ),
('Taoism', 'Taoism'             ),
('Zoroastrianism', 'Zoroastrianism'            ),
('Druze', 'Druze'   ),
('Sikhism', 'Sikhism' ),
('Taoism', 'Taoism' ),
('Shinto', 'Shinto'  ),
('Judaism', 'Judaism' ),
('Confucianism', 'Confucianism'    ),
('Spiritism', 'Spiritism'  ),
('TST', 'TST'  ),
('shamanism', 'shamanism'    ),
('Caodaism', 'Caodaism'   ),
('Baháʼí_Faith', 'Baháʼí_Faith'    ),
('Jainism', 'Jainism'),
('Cheondoism', 'Cheondoism'  ),
('Hoahaoism', 'Hoahaoism'  ),
('Tenriism', 'Tenriism')

           ]



    genders = [

('Male', 'Male'),
('Female', 'Female'),
("Agender", "Agender"),
("Androgyne", "Androgyne"),
("Androgynous", "Androgynous"),
("Bigender", "Bigender"),
("Cis", "Cis"),
("Cisgender", "Cisgender"),
("Cis Female", "Cis Female"),
("Cis Male", "Cis Male"),
("Cis Man", "Cis Man"),
("Cis Woman", "Cis Woman"),
("Cisgender Female", "Cisgender Female"),
("Cisgender Male", "Cisgender Male"),
("Cisgender Man", "Cisgender Man"),
("Cisgender Woman", "Cisgender Woman"),
("Female to Male", "Female to Male"),
("FTM", "FTM"),
("Gender Fluid", "Gender Fluid"),
("Gender Nonconforming", "Gender Nonconforming"),
("Gender Questioning", "Gender Questioning"),
("Gender Variant", "Gender Variant"),
("Genderqueer", "Genderqueer"),
("Intersex", "Intersex"),
("Male to Female", "Male to Female"),
("MTF", "MTF"),
("Neither", "Neither"),
("Neutrois", "Neutrois"),
("Non-binary", "Non-binary"),
("Other", "Other"),
("Pangender", "Pangender"),
("Trans", "Trans"),
("Trans*", "Trans*"),
("Trans Female", "Trans Female"),
("Trans* Female", "Trans* Female"),
("Trans Male", "Trans Male"),
("Trans* Male", "Trans* Male"),
("Trans Man", "Trans Man"),
("Trans* Man", "Trans* Man"),
("Trans Person", "Trans Person"),
("Trans* Person", "Trans* Person"),
("Trans Woman", "Trans Woman"),
("Trans* Woman", "Trans* Woman"),
("Transfeminine", "Transfeminine"),
("Transgender", "Transgender"),
("Transgender Female", "Transgender Female"),
("Transgender Male", "Transgender Male"),
("Transgender Man", "Transgender Man"),
("Transgender Person", "Transgender Person"),
("Transgender Woman", "Transgender Woman"),
("Transmasculine", "Transmasculine"),
("Transsexual", "Transsexual"),
("Transsexual Female", "Transsexual Female"),
("Transsexual Male", "Transsexual Male"),
("Transsexual Man", "Transsexual Man"),
("Transsexual Person", "Transsexual Person"),
("Transsexual Woman", "Transsexual Woman"),
("Two-Spirit", "Two-Spirit")

           ]



    title = StringField(' ')

    roomie_info_indicator = TextAreaField(' ')

    update_basic_info_indicator = TextAreaField(' ')

    fundraiser_indicator = StringField(' ')

    lost_item_indicator = TextAreaField(' ' )

    found_item_indicator = TextAreaField(' ' )

    add_account_indicator = StringField(' ')

    normal_post_indicator = TextAreaField(' ' )

    price = IntegerField(' ')

    venue = StringField(' ')

    content = TextAreaField(' ')

    photo = FileField('' )

    religion = SelectField('',    choices = religions, default = 'Atheism' )

    gender = SelectField('',    choices = genders, default = 'Male' )

    department = SelectField('',    choices = departments, default = 'AGRIC-ECONOMICS AND EXTENSION' )

    level = SelectField('',    choices = levels, default = 'high school graduate' )

    relationship_status = SelectField('',    choices = relationships, default = 'single' )

    needs_roomate = SelectField('',    choices = answers, default = 'NO' )

    budget = SelectField('',    choices = price_range, default = 'Greater than 10k' )

































# POST EVENT FORM
class EventForm(FlaskForm):

    a = [



(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(24),
(25),
(26),
(27),
(28),
(29),
(30),
(31)

    ]      



    b = [('January', 'January'),
        ('February', 'February'),
        ('March', 'March'),
        ('April', 'April'),
       ('May', 'May'),
       ('June', 'June'),
        ('July', 'July'),
        ('August', 'August'),
       ('September', 'September'),
       ('October', 'October'),
        ('November', 'November'),
        ('December', 'December')

       ]



    c = [

(2021),
(2022),
(2023),
(2024),
(2025),
(2026),
(2027),
(2028),
(2029),
(2030),
(2031)

    ]


    day = SelectField('Day', [Required()] ,  choices = a)
    month = SelectField('month',  [Required()] , choices = b)
    year = SelectField('year', [Required()] ,  choices = c)

    title = StringField('Title', [validators.Length(min=3, max=100)])
    venue = StringField('Venue', [validators.Length(min=3, max=100)])
    content = TextAreaField('Content', [validators.Length(min=3, max=30000)])
    photo = FileField('')





# INDIVIDUAL POST EVENT FORM
class TitleForm(FlaskForm):
    title = StringField('Title', [validators.Length(min=3, max=30)])

class ContentForm(FlaskForm):
    content = TextAreaField('Content', [validators.Length(min=3, max=300)])
   
class PhotoForm(Form):
    photo = FileField('')


class MultiPhotoForm(Form):
    photo =  MultipleFileField('', [Required()])

class VenueForm(FlaskForm):
    venue = StringField('Venue', [validators.Length(min=1, max=100)])


class LinkForm(FlaskForm):
    url = URLField('Add/Update link (must contain "http://") ', validators = [url()])

    # def validate(self):
    #     if not (str(self.url.data).startswith("http://") or str(self.url.data).startswith("https://")):
    #         self.url.data = "http://" + self.url.data

 





# POST EVENT FORM
class LostForm(FlaskForm):


    x = [('id card', 'id card'),
             ('phone', 'phone'),
             ('key', 'key'),
             ('laptop', 'laptop'),
             ('tablet', 'tablet'),
             ('charger', 'charger'),
             ('document or file', 'document or file'),
             ('clothing', 'clothing'),
             ('fashion accessory', 'fashion accessory'),
             ('mobile phone accessory', 'mobile phone accessory'),
             ('wallet', 'wallet'),
             ('electronic device', 'electronic device'),
             ('atm card', 'atm card')
             ]
             
    z = [('Found Items', 'Found Items'),
             ('Lost Items', 'Lost Items'),
             ('Events', 'Events'),
             ('Regular Posts', 'Regular Posts'),
             ('Donation Campaigns', 'Donation Campaigns'),
             ('All', 'All')
             ]



    stud = [('Yes', 'Yes'),
            ('No', 'No')
           ]

    item_name = StringField('Name of item?', [validators.Length(min=3, max=100)])

    item_location = StringField('Location item was found?', [validators.Length(min=3, max=100)])

    description = TextAreaField('Description of Item', [validators.Length(min=3, max=30000)])

    photo = FileField('')


    possession = RadioField('Are you currently in possession of this item?', [Required()] ,   choices = stud, default = 'Yes' )


    item_category = SelectField('Item category', [Required()] ,  choices = x)



# for each in LostForm.x :
#   print(str(each[0]))


class SearchingForm(FlaskForm):

    x = [('id card', 'id card'),
             ('phone', 'phone'),
             ('key', 'key'),
             ('laptop', 'laptop'),
             ('tablet', 'tablet'),
             ('charger', 'charger'),
             ('document or file', 'document or file'),
             ('clothing', 'clothing'),
             ('fashion accessory', 'fashion accessory'),
             ('mobile phone accessory', 'mobile phone accessory'),
             ('wallet', 'wallet'),
             ('electronic device', 'electronic device'),
             ('atm card', 'atm card')
             ]

    a = [

(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(24),
(25),
(26),
(27),
(28),
(29),
(30),
(31)

    ]      



    b = [('January', 'January'),
                ('February', 'February'),
                ('March', 'March'),
                ('April', 'April'),
               ('May', 'May'),
               ('June', 'June'),
                ('July', 'July'),
                ('August', 'August'),
               ('September', 'September'),
               ('October', 'October'),
                ('November', 'November'),
                ('December', 'December')
        
               ]



    c = [


(2000),
(2001),
(2002),
(2003),
(2004),
(2005),
(2006),
(2007),
(2008),
(2009),
(2010),
(2011),
(2012),
(2013),
(2014),
(2015),
(2016),
(2017),
(2018),
(2019),
(2020),
(2021)

    ]
               



    item_name = StringField('Name of Item?', [validators.Length(min=3, max=100)])

    item_location = StringField('Location Item Was Lost?', [validators.Length(min=3, max=100)])

    description = TextAreaField('Description ', [validators.Length(min=3, max=30000)])


    item_category = SelectField('Item category', [Required()] ,  choices = x)


    day = SelectField('Day',  choices = a)
    month = SelectField('month',   choices = b)
    year = SelectField('year',   choices = c)















# INDIVIDUAL POST EVENT FORM
class TitleForm(FlaskForm):
    title = StringField('Title', [validators.Length(min=3, max=30)])

class ContentForm(FlaskForm):
    content = TextAreaField('Content', [validators.Length(min=3, max=300)])
   
class PhotoForm(Form):
    photo = FileField('')
    photo = FileField('')


class MultiPhotoForm(Form):
    photo =  MultipleFileField('', [Required()] )

class VenueForm(FlaskForm):
    venue = StringField('Venue', [validators.Length(min=1, max=100)])


class LinkForm(FlaskForm):
    url = URLField('Add/Update link (must contain "http://") ', validators = [url()])

    # def validate(self):
    #     if not (str(self.url.data).startswith("http://") or str(self.url.data).startswith("https://")):
    #         self.url.data = "http://" + self.url.data

 












#####################################
######## ROOMIE IM FORMS #########
#####################################


class RoomieRegisterForm(FlaskForm):
    a = [('Christianity', 'Christianity'),
               ('Islam', 'Islam'),
               ('Other', 'Other')
               ]

    b = [('100L', '100L'),
                ('200L', '200L'),
                ('300L', '300L'),
                ('400L', '400L'),
               ('500L', '500L')]

    c = [('Gidan Kwano', 'Gidan Kwano'),
                ('Bosso', 'Bosso'),
                ('Other', 'Other')
               ]

    d = [('Greater than 10k', 'Greater than 10k'),
                ('Greater than 20k', 'Greater than 20k'),
                ('Greater than 30k', 'Greater than 30k'),
                ('Greater than 40k', 'Greater than 40k'),
                ('50k and above', '50k and above')
               ]

   


    religion = SelectField('Religion', [Required()] ,  choices = a)
    level = SelectField('Level',  [Required()] , choices = b)
    based_in = SelectField('Based currently in', [Required()] ,  choices = c)
    budget = SelectField('What\'s Your Budget?', [Required()] ,  choices = d)




#####################################
######## ROOMIE IM FORMS #########
#####################################


class ClaimerForm(FlaskForm):



    photo = FileField('')

    content = TextAreaField('A brief description of this lost item', [validators.Length(min=3, max=30000)])
   
    








#####################################
######## ROOMIE INDEPENDENT  FORMS #########
#####################################


class ReligionForm(FlaskForm):
    a = [('Christianity', 'Christianity'),
               ('Islam', 'Islam'),
               ('Other', 'Other')
               ]



    religion = SelectField('Religion', [Required()] ,  choices = a)




class LevelForm(FlaskForm):
    b = [('100L', '100L'),
                ('200L', '200L'),
                ('300L', '300L'),
                ('400L', '400L'),
               ('500L', '500L')]

    level = SelectField('Level',  [Required()] , choices = b)


class BasedForm(FlaskForm):
    c = [('Gidan Kwano', 'Gidan Kwano'),
                ('Bosso', 'Bosso'),
                ('Other', 'Other')
               ]

    based_in = SelectField('Based currently in', [Required()] ,  choices = c)



class BudgetForm(FlaskForm):
    c = [('Greater than 10k', 'Greater than 10k'),
                ('Greater than 20k', 'Greater than 20k'),
                ('Greater than 30k', 'Greater than 30k'),
                ('Greater than 40k', 'Greater than 40k'),
                ('50k and above', '50k and above')
               ]

    budget = SelectField('Change Your Budget?', [Required()] ,  choices = c)








class StudentForm(FlaskForm):
    stud = [('Yes', 'Yes'),
            ('No', 'No')
           ]


    is_student = RadioField('Are you a student?', [Required()] ,  choices = stud)























#####################################
######## BUY IM FORMS    #########
#####################################








    






# PHONE AD FORM
class AdForm(FlaskForm):


    r = [('3GB', '3GB'),
                ('3GB', '3GB'),
                ('3GB', '3GB')
               ]



    c = [('red', 'red'),
            ('blue', 'blue'),
            ('black', 'black')
           ]




    s = [('500 by 500', '500 by 500'),
            ('500 by 500', '500 by 500'),
            ('500 by 500', '500 by 500')
           ]

    cam = [('2MP', '2MP'),
            ('4MP', '4MP'),
            ('8MP', '8MP')
           ]

    cond = [('New', 'New'),
            ('Used', 'Used')
           ]

    br = [('Tecno', 'Tecno'),
            ('infinix', 'infinix'),
            ('Nexus', 'Nexus'),
            ('Apple', 'Apple')
           ]



    title = StringField('Title',  [validators.Length(min=3, max=50)])

    

    price = IntegerField('Price',  [Required()] )

    description = TextAreaField('Description')

    photo = MultipleFileField('', [Required()])



    brand = SelectField('Brand', [Required()] ,  choices = br)

    ram = SelectField('RAM',  choices = r)

    # operating_system = SelectField('Operating System',  choices = os)

    # storage_capacity = SelectField('Storage Capacity',  choices = storage)

    colour = SelectField('Colour',  choices = c)

    screen_size = SelectField('Screen size',  choices = s)

    camera = SelectField('Camera',  choices = cam)

    condition = RadioField('Condition', [Required()] ,  choices = cond)








class TabletAdForm(FlaskForm):

    r = [('3GB', '3GB'),
                ('3GB', '3GB'),
                ('3GB', '3GB')
               ]


    storage = [('3GB', '3GB'),
                ('6GB', '6GB'),
                ('112GB', '112GB')
               ]


    c = [('red', 'red'),
            ('blue', 'blue'),
            ('black', 'black')
           ]

    os = [('windows', 'windows'),
            ('linux', 'linux'),
            ('ios', 'ios'),
            ('android', 'android')
           ]



    s = [('500 by 500', '500 by 500'),
            ('500 by 500', '500 by 500'),
            ('500 by 500', '500 by 500')
           ]

    cam = [('2MP', '2MP'),
            ('4MP', '4MP'),
            ('8MP', '8MP')
           ]

    cond = [('New', 'New'),
            ('Used', 'Used')
           ]

    br = [('Tecno', 'Tecno'),
            ('infinix', 'infinix'),
            ('Samsung', 'Samsung'),
            ('Apple', 'Apple')
           ]



    title = StringField('Title',  [validators.Length(min=3, max=50)])

    

    price = IntegerField('Price',  [Required()] )

    description = TextAreaField('Description')

    photo = MultipleFileField('', [Required()])



    brand = SelectField('Brand', [Required()] ,  choices = br)

    ram = SelectField('RAM',  choices = r)

    operating_system = SelectField('Operating System',  choices = os)

    storage_capacity = SelectField('Storage Capacity',  choices = storage)

    colour = SelectField('Colour',  choices = c)

    screen_size = SelectField('Screen size',  choices = s)

    camera = SelectField('Camera',  choices = cam)

    condition = RadioField('Condition', [Required()] ,  choices = cond)


   
    
    
 





# PHONE AD FORM
class MobileAccessoriesForm(FlaskForm):

    c = [('red', 'red'),
            ('blue', 'blue'),
            ('black', 'black')
           ]

    cond = [('New', 'New'),
            ('Used', 'Used')
           ]

    br = [('Tecno', 'Tecno'),
            ('infinix', 'infinix'),
            ('Nexus', 'Nexus'),
            ('Apple', 'Apple')
           ]


    ty = [('type', 'type'),
            ('type', 'type'),
            ('type', 'type'),
            ('type', 'type')
           ]


    title = StringField('Title',  [validators.Length(min=3, max=50)])

    price = IntegerField('Price',  [Required()] )

    description = TextAreaField('Description' ,  [Required()])

    photo = MultipleFileField('', [Required()])

    brand = SelectField('Brand', [Required()] ,  choices = br)

    Type = SelectField('Type', [Required()] ,  choices = ty)

    colour = SelectField('Colour',  choices = c)

    condition = RadioField('Condition', [Required()] ,  choices = cond)