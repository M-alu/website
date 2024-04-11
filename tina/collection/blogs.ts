import type { Collection } from "tinacms";

const Blog: Collection = {
    label: 'Blog',
    name: 'blog',
    path: 'content/english/blog',
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
            label:'Image de presentation',
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
        }

    ]
}

export {Blog};