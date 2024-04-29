import type { Collection } from "tinacms";

const Portfolio: Collection = {
    label: 'Portfolio',
    name: 'portfolio',
    path: 'content/english/portfolio',
    match: {
        exclude: '_index'
    },
    ui:{
        allowedActions:{
            create: true,
            delete: true,
        }
    },
    format: 'md',
    fields:[
        {
            type:'string',
            name:'title',
            label:'Titre du projet',
        },
        {
            type:'datetime',
            name:'date',
            label:'Date du projet',
        },
        {
            type:'image',
            name:'image',
            label:'Image de presentation du projet',
        },
        {
            type:'string',
            name:'categories',
            label:'Categori du projet',
            list:true,
        },
        {
            type:'string',
            name:'description',
            label:'Description du projet',
        },
        {
            type:'boolean',
            name:'draft',
            label:'Brouillon',
        },
        {
            type:'rich-text',
            name:'body',
            label:'Body',
            isBody:true
        },
        {
            type:'string',
            name:'gallery',
            label:'Galleri d\'images',
            description:'images/portfolio/Nom du dossier',
            ui:{
                defaultValue:'images/portfolio'
            }
        }

    ]
}

export {Portfolio};