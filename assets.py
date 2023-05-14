from flask_assets import Bundle, Environment
import app

bundles = {
	

	'comiled_js': Bundle(

		'assets/js/jquery-3.5.1.min.js',
		'assets/js/controller.js',
		'assets/js/platter.js',
		'assets/js/aos.js',
		output='gen/home.js'

	        ),





	'compiled_css': Bundle(

		'assets/css/headers/variables.css',
		'assets/css/headers/header.css',
		'assets/css/modals/tiny-info-modal.css',
		'assets/css/message_flashes/message-flashes.css',
		'assets/css/sidebars/left-sidebar.css',
		'assets/css/buttons_and_links/buttons_and_links.css',
		'assets/css/drop_downs/drop_down_button.css',
		'assets/css/navbars/general_page_navbar.css',
		'assets/css/headers/svg-loader.css',
		'assets/css/headers/logo-loader.css',
		'assets/css/main/general_styles.css',
		'assets/css/aos.css',
		'assets/css/footers/footer.css',
		'assets/css/footers/bottom-informations.css',
		'assets/css/flickity.css',
		output='gen/home.css'

	)


}


assets = Environment(app)

assets.register(bundles)

