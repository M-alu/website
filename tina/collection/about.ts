import { HiddenField, type Collection } from "tinacms";

const About: Collection = {
    label: 'A Propos',
    name: 'about',
    path: 'content/english',
    match: {
        include: 'about'
    },
    ui:{
        allowedActions:{
            create: false,
            delete: false,
        }
    },
    format: 'md',
    defaultItem: ()=> {
        return {
            layout: 'about',
        }
    },
    fields:[
        {
            type:'string',
            name:'title',
            label:'Titre'
        },
        {
            type:'string',
            name:'description',
            label:'Description'
        },
        {
            type:'image',
            name:'author_image',
            label:'Image Autheur'
        },
        {
            type:'image',
            name:'author_signature',
            label:'Image Signature'
        },
        {
            type:'boolean',
            name:'draft',
            label:'Brouillon'
        },
        {
            type:'string',
            name:'layout',
            label:'Layout',
            ui: {
                component: HiddenField
            },
        },
        {
            type:'object',
            name:'work_process',
            label:'Ma maniere de travailler',
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
                    label:'Processus de travail',
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
                            type:'image',
                            name:'icon',
                            label:'Image',
                        },
                        {
                            type:'string',
                            name:'content',
                            label:'Text',
                        }
                    ]
                },
                
            ]
        },       
        {
            type:'object',
            name:'team',
            label:'Mon Equipe',
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
                    name:'team_member',
                    label:'Equipes',
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
                            type:'image',
                            name:'image',
                            label:'Image',
                        },
                        {
                            type:'string',
                            name:'designation',
                            label:'Designation',
                        }
                    ]
                },
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
                    type:'string',
                    name:'title',
                    label:'Titre du Block'
               },
            ]
        },  
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },      
    ]
}

export {About};