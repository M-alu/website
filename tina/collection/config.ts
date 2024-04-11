import { HiddenField, type Collection } from "tinacms";

const Menus: Collection = {
    label: 'Menus',
    name: 'menus',
    path: 'config/_default',
    match: {
        include: 'menus.en'
    },
    ui:{
        allowedActions:{
            create: false,
            delete: false,
        }
    },
    format: 'toml',
    fields:[
        {
            type:'object',
            name:'main',
            label:'Titre du projet',
            list:true,
            ui:{
                itemProps: (item) => ({ label: item.name }),
            },
            fields:[
                {
                    type:'string',
                    name:'URL',
                    label:'URL',
                },
                {
                    type:'string',
                    name:'name',
                    label:'Titre',
                },
                {
                    type:'number',
                    name:'weight',
                    label:'Odre d\'affichage',
                },

            ]
        },
        
    ]
}
const Params: Collection = {
    label: 'Parametre',
    name: 'params',
    path: 'config/_default',
    match: {
        include: 'params'
    },
    ui:{
        allowedActions:{
            create: false,
            delete: false,
        }
    },
    format: 'toml',
    fields:[
        {
            type:'image',
            name:'favicon',
            label:'Favicon',
        },
        {
            type:'image',
            name:'logo',
            label:'Logo',
        },
        {
            type:'string',
            name:'logo_width',
            label:'Taille du Logo',
        },
        {
            type:'boolean',
            name:'logo_webp',
            label:'Logo en compressé',
            ui: {
                component: HiddenField,
                defaultValue:true,
            }
        },
        {
            type:'string',
            name:'logo_text',
            label:'Text Logo',
        },
        {
            type:'boolean',
            name:'purge_css',
            label:'Purge css',
            ui: {
                component: HiddenField,
                defaultValue:true,
            }
        },
        {
            type:'string',
            name:'contact_form_action',
            label:'Action du formulaire de contact',
        },
        {
            type:'string',
            name:'google_adsense',
            label:'Id Google',
        },
        {
            type:'string',
            name:'google_tag_manager',
            label:'Tag Google',
        },    
        {
            type: 'object',
            name:'google_map',
            label:'Map Google',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Afficher'
                },
                {
                    type:'string',
                    name:'embed_url',
                    label:'Lien de la Map'
                }
            ]
        }   , 
        {
            type:'string',
            name:'author',
            label:'Autheur du site',
        },        
        {
            type:'string',
            name:'copyright',
            label:'Copyright',
        },        
        {
            type:'boolean',
            name:'theme_copyright',
            label:'Theme',
            ui: {
                component: HiddenField,
                defaultValue:false,
            }
        },    
        {
            type:'object',
            name:'contact_info',
            label:'Information de Contact',
            fields:[
                {
                    type:'string',
                    name:'adress',
                    label:'Adresse'
                
                },
                {
                    type:'string',
                    name:'email',
                    label:'Email'
                
                },
                {
                    type:'string',
                    name:'mobile',
                    label:'Telephone'
                
                },
            ]
        }, 
        {
            type:'object',
            name:'metadata',
            label:'Metadata',
            fields:[
                {
                    type:'string',
                    name:'author',
                    label:'Autheur'
                
                },
                {
                    type:'string',
                    name:'description',
                    label:'Description'
                
                },
                {
                    type:'image',
                    name:'image',
                    label:'Image'
                
                },
                {
                    type:'string',
                    name:'keywords',
                    label:'Mots Clés',
                    list:true,
                
                },
            ]
        },   
         {
            type:'object',
            name:'preloader',
            label:'preloader',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Activer'
                
                },
                {
                    type:'image',
                    name:'preloader',
                    label:'Preloader Image'
                
                },
            ]
        },        
        {
            type:'object',
            name:'logo_slider',
            label: 'Logo Slider',
            list: true,
            ui:{
                itemProps: (item) => ({ label: item.URL }),
            },
            fields:[
                {
                    type:'string',
                    name:'URL',
                    label:'URL',
                },
                {
                    type:'image',
                    name:'logo',
                    label:'Logo'
                }
            ]
        },
        {
            type:'object',
            name:'social',
            label: 'Logo social',
            list: true,
            ui:{
                itemProps: (item) => ({ label: item.title }),
            },
            fields:[
                {
                    type:'string',
                    name:'icon',
                    label:'Icon (Recuperer nom du logo sur https://themify.me/themify-icons)',
                },
                {
                    type:'string',
                    name:'link',
                    label:'Lien'
                },
                {
                    type:'string',
                    name:'title',
                    label:'Titre'
                }
            ]
        }
    ]
}


export {Menus, Params};