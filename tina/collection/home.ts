import type { Collection } from "tinacms";

const Home: Collection = {
    label: 'Accueil',
    name: 'home',
    path: 'content/english',
    match: {
        include: '_index'
    },
    ui:{
        allowedActions:{
            create: false,
            delete: false,
        }
    },
    format: 'md',
    fields:[
        {
            type:'object',
            name:'banner',
            label:'Bannière',
            fields:[
                {
                    type:'string',
                    name:'title',
                    label:'Titre'
                }
            ]
        },
        {
            type:'object',
            name:'about',
            label:'Block à propos',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Activer'
                },
                {
                    type:'string',
                    name:'content',
                    label:'Text de description',
                    ui:{
                        component: 'textarea'
                    }
                },
                {
                    type:'object',
                    name:'button',
                    label:'Boutton',
                    fields:[
                        {
                            type:'boolean',
                            name:'enable',
                            label:'Activer'
                        },
                        {
                            type:'string',
                            name:'label',
                            label:'Text',
                        },
                        {
                            type:'string',
                            name:'URL',
                            label:'URL',
                        }
                    ]
                }
            ]
        },
        {
            type:'object',
            name:'skill',
            label:'Block de Competences',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Activer'
                },
                {
                    type:'string',
                    name:'title',
                    label:'Titre du block',
                },
                {
                    type:'object',
                    name:'item',
                    label:'Competences',
                    list:true,
                    ui:{
                        itemProps: (item) => ({ label: item.title }),
                    },
                    fields:[
                        {
                            type:'string',
                            name:'title',
                            label:'Titre'
                        },
                        {
                            type:'string',
                            name:'progress',
                            label:'Pourcentage de Competence',
                        },
                        {
                            type:'string',
                            name:'color',
                            label:'Couleur',
                            ui: {
                                component: 'color',
                            }
                        }
                    ]
                }
            ]
        },        
        {
            type:'object',
            name:'experience',
            label:'Block de mes experiences',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Activer'
                },
                {
                    type:'string',
                    name:'title',
                    label:'Titre du block',
                },
                {
                    type:'object',
                    name:'item',
                    label:'Experiences',
                    list:true,
                    ui:{
                        itemProps: (item) => ({ label: item.title }),
                    },
                    fields:[
                        {
                            type:'image',
                            name:'logo',
                            label:'Image',
                        },
                        {
                            type:'string',
                            name:'title',
                            label:'Titre'
                        },
                        {
                            type:'string',
                            name:'company',
                            label:'Entreprise',
                        },
                        {
                            type:'string',
                            name:'duration',
                            label:'Periode'
                        }
                    ]
                }
            ]
        },
        {
            type:'object',
            name:'education',
            label:'Ma Formation',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Activer'
                },
                {
                    type:'string',
                    name:'title',
                    label:'Titre du block',
                },
                {
                    type:'object',
                    name:'item',
                    label:'Mes Formations',
                    list:true,
                    ui:{
                        itemProps: (item) => ({ label: item.title }),
                    },
                    fields:[
                        {
                            type:'string',
                            name:'title',
                            label:'Titre'
                        },
                        {
                            type:'string',
                            name:'year',
                            label:'Année de Formation',
                        },
                        {
                            type:'string',
                            name:'academy',
                            label:'Ecole',
                        }
                    ]
                }
            ]
        },        
        {
            type:'object',
            name:'service',
            label:'Nos Services',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Activer'
                },
                {
                    type:'string',
                    name:'title',
                    label:'Titre du block',
                },
                {
                    type:'object',
                    name:'item',
                    label:'Nos Services',
                    list:true,
                    ui:{
                        itemProps: (item) => ({ label: item.title }),
                    },
                    fields:[
                        {
                            type:'string',
                            name:'title',
                            label:'Titre'
                        },
                        {
                            type:'string',
                            name:'icon',
                            label:'Icon',
                        },
                        {
                            type:'string',
                            name:'content',
                            label:'Text',
                        },
                        {
                            type:'boolean',
                            name:'highlighted',
                            label:'Metre en avant',
                        }
                    ]
                }
            ]
        },
        {
            type:'object',
            name:'testimonial',
            label:'Les Temoignages',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Activer'
                },
                {
                    type:'string',
                    name:'title',
                    label:'Titre du block',
                },
                {
                    type:'object',
                    name:'item',
                    label:'Les Temoignages',
                    list:true,
                    ui:{
                        itemProps: (item) => ({ label: item.name }),
                    },
                    fields:[
                        {
                            type:'string',
                            name:'name',
                            label:'Nom du Client'
                        },
                        {
                            type:'image',
                            name:'image',
                            label:'Image du Client',
                        },
                        {
                            type:'string',
                            name:'designation',
                            label:'Designation',
                        },
                        {
                            type:'string',
                            name:'content',
                            label:'Temoignage',
                            ui:{
                                component:'textarea',
                            },
                        }
                    ]
                }
            ]
        },
        {
            type:'object',
            name:'clients_logo_slider',
            label:'Slider de logo',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Activer'
                },
                {
                    type:'object',
                    name:'item',
                    label:'Slider',
                    list:true,
                    ui:{
                        itemProps: (item) => ({ label: item.name }),
                    },
                    fields:[
                        {
                            type:'image',
                            name:'logo',
                            label:'Image',
                        },
                        {
                            type:'string',
                            name:'title',
                            label:'Titre de l\'image',
                        },
                        {
                            type:'string',
                            name:'URL',
                            label:'URL'
                        },

                    ]
                }
            ]
        },
        {
            type:'object',
            name:'portfolio',
            label:'Portfolio',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Activer'
                },
                {
                    type:'string',
                    name:'title',
                    label:'Titre'
                },
                {
                    type:'number',
                    name:'item_show',
                    label:'Nombre de Projet afficher'
                },
            ]
        },
        {
            type:'object',
            name:'blog',
            label:'Blog',
            fields:[
                {
                    type:'boolean',
                    name:'enable',
                    label:'Activer'
                },
                {
                    type:'string',
                    name:'title',
                    label:'Titre'
                }
            ]
        },      
    ]
}

export {Home};