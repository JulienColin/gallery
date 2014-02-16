angular.module('labels', [])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'page.title': 'Guy Colin - Painter',
            'menu.home': 'Home',
            'menu.about': 'About',
            'menu.paintings': 'Paintings',
            'menu.exhibitions': 'Exhibitions',
            'menu.contact': 'Contact',
            'home.title' : 'Guy Colin',
            'home.subTitle' : 'Painter'
        });

        $translateProvider.translations('fr', {
            'page.title': 'Guy Colin - Artiste Peintre',
            'menu.home': 'Accueil',
            'menu.about': 'Parcours',
            'menu.paintings': 'Peintures',
            'menu.exhibitions': 'Expositions',
            'menu.contact': 'Contact',
            'home.title' : 'Guy Colin',
            'home.subTitle' : 'Artiste Peintre'
        });

        // Set english by default is browser local is english
        if(_.contains(['en','en-US','en-AU','en-CA','en-IE','en-JM','en-NZ','en-GB'], window.navigator.language)){
            $translateProvider.preferredLanguage('en');
        } else {
            $translateProvider.preferredLanguage('fr');
        }
}]);