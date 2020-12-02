
var app = new Vue ({
    el: '#app',
    data: {
        feautured:'Feautured',
        menus:['home','pages','program','tickets','speakers','papers','blog','shortcodes'],
        logo: 'logo',
        questions:[
            {
                title:'Who we are',
                text:'Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.',
                link:'Learn More',
                icon:'fas fa-trophy'
            },
            {
                title:'Who we are',
                text:'Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.',
                link:'Learn More',
                icon:'fas fa-bolt'
            },
            {
                title:'Why us?',
                text:'Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.',
                link:'Learn More',
                icon:'fas fa-question'
            }
        ],
        speakers:[
            {
                img:'speaker-8',
                title:'Laurence Francis',
                text:'Google\'s UI Designer',
            },
            {
                img:'speaker-7',
                title:'John Super Doe',
                text:'Yahoo\'s HR',
            },
            {
                img:'speaker-6',
                title:'Patrick Spencer',
                text:'S&P Analyzer',
            },
            {
                img:'speaker-5',
                title:'Janet Jones',
                text:'Newyork Post\'s GM',
            }
        ],
        programs:[
            {
                day:'Day 1',
                date:'23 may 2016'
            },
            {
                day:'Day 2',
                date:'23 may 2020'
            },
            {
                day:'Day 3',
                date:'24 may 2030'
            },
            {
                day:'Day 4',
                date:'25 may 2040'
            },
            {
                day:'Day 5',
                date:'26 may 2050'
            }
        ],
        news:[
            {
                data: '03 Dec 2013 / 0 Comments',
                title: 'Sedial eiusmod tempor',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere.... ',
                link:'Read More',
                img:'photodune-7770665-two-white-coffee-mug-with-diy-decoration-o'
            },
            {
                data: '03 Dec 2013 / 2 Comments',
                title: 'Donec luctus imperdiet',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere.... ',
                link:'Read More',
                img:'photodune-8797753-multiethnic-people-with-startup-business-t'
            },
            {
                data: '03 Dec 2013 / 2 Comments',
                title: 'Magna pars studiorum',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere.... ',
                link:'Read More',
                img:'photodune-8522811-speaker-at-business-conference-and-present'
            }
        ],
        tickets: [
            {
                title:'One Day Pass',
                subtitle: 'free',
                text:['One Day Access','Coffee Break','Lunch(International Buffet)','Document Sheets','50 USD Voucher For Next Event'],
                link:'book now',
            },
            {
                title:'Four Day Passes',
                subtitle: '750.00 USD',
                text:['Four Day Access','Coffee Break','Lunch(International Buffet)','Document Sheets','100 USD Voucher For Next Event'],
                link:'book now',
            },
            {
                title:'Two Day Passes',
                subtitle: '580.00 USD',
                text:['Two Day Access','Coffee Break','Lunch(International Buffet)','Document Sheets','70 USD Voucher For Next Event'],
                link:'book now',
            }
        ],
        sponsor:['banner-1','banner-2','banner-3','banner-4','banner-5','banner-6'],
        footer:[
            {
                title:'abouts',
                text:'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                icon:['fab fa-facebook-f','fab fa-twitter','fab fa-google','fab fa-flickr','fab fa-instagram','fab fa-linkedin','fab fa-pinterest-square']
            },
            {
                title:'Recent news',
                text:['Sem Porta Mollis Parturient','Nullam Lorem Mattis Purus','Nibh Sem Sit Ullamcorper','Donec luctus imperdiet','Magna pars studiorum'],
            },
            {
                title:'Get Your Seat!',
                text:"Book for your seat before it's too rate. We provide variety of ticket options.",
                button:'Check Out Tickets!'
            },
            {
                title:'Gallery From Last Year',
                image:[
                    'photodune-6745579-modern-creative-man-relaxing-on-workspace-',
                    'photodune-6745585-modern-creative-workspace-m-150x150',
                    'photodune-6745606-man-wristwatch-calendar-key-and-glasses-on',
                    'photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (1)',
                    'photodune-8522811-speaker-at-business-conference-and-present (1)',
                    'photodune-8523683-speaker-at-business-convention-and-present',
                    'photodune-8795110-overhead-of-essentials-denim-clothes-m-150',
                    'photodune-8797753-multiethnic-people-with-startup-business-t (1)',
                    'speaker-1-150x150',
                    'speaker-5-150x150',
                    'speaker-3-150x150',
                    'speaker-2-150x150',
                ]
            },
            {
                text:"© Copyright GoodLayers, All Right Reserved",
                link:[
                    'About Us',
                    'Accommodation',
                    'Call For Paper',
                    'Contact Us'
                ]
            }
        ]

    },
    methods: {
        isMobile(){
            if(screen.width <= 1024) {
				return true;
			}else {
				return false;
			}
        },

        autoplay() {
			var vid = document.getElementById("myVideo");
			if (vid.autoplay === true) {
				vid.autoplay = false
				vid.load();
			} else if (vid.autoplay === false) {
				vid.autoplay = true
				vid.load();
			}
		},
    },
    mounted() {
        this.isMobile()
    }
});