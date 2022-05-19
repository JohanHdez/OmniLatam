import { Car } from "src/app/car/model/car.model";

export let CarsMock: Car[] = [
    {
        id: 1,
        photo: 'data:image/jpeg;base64,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',
        model: 'Audi TT',
        year: 2022,
        brand: 'Renault',
        price: '$ 200,000',
        carSpecifications: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum repellendus in ad corrupti incidunt itaque sunt illo officiis esse. Aliquam quaerat non blanditiis animi vero aperiam quasi saepe? Corrupti!'
    },
    {
        id: 2,
        photo: 'https://www.kindpng.com/picc/m/389-3897824_edit-png-in-photoshop-cb-edits-car-png.png',
        model: 'Audi TT',
        year: 2021,
        brand: 'Audi',
        price: '$ 190,000',
        carSpecifications: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum repellendus in ad corrupti incidunt itaque sunt illo officiis esse. Aliquam quaerat non blanditiis animi vero aperiam quasi saepe? Corrupti!'
    },
    {
        id: 3,
        photo: 'https://cdn.motor1.com/images/mgl/6krGb/s1/4x3/asi-es-la-nueva-chevrolet-captiva-es-el-clon-de-una-suv-china-de-saic-wuling.webp',
        model: 'Audi TT',
        year: 2020,
        brand: 'Chevrolet',
        price: '$ 180,000',
        carSpecifications: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum repellendus in ad corrupti incidunt itaque sunt illo officiis esse. Aliquam quaerat non blanditiis animi vero aperiam quasi saepe? Corrupti!'
    },
    {
        id: 4,
        photo: 'https://www.pngfind.com/pngs/m/94-949980_audi-clipart-audi-car-audi-tt-rs-2010.png',
        model: 'Audi TT',
        year: 2019,
        brand: 'Audi',
        price: '$ 170,000',
        carSpecifications: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum repellendus in ad corrupti incidunt itaque sunt illo officiis esse. Aliquam quaerat non blanditiis animi vero aperiam quasi saepe? Corrupti!'
    },
    {
        id: 5,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7EB4tgmnMp9pK6MVsRRuQjI4aNiwbnjgLA&usqp=CAU',
        model: 'nissan march',
        year: 2019,
        brand: 'Nissan',
        price: '$ 170,000',
        carSpecifications: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum repellendus in ad corrupti incidunt itaque sunt illo officiis esse. Aliquam quaerat non blanditiis animi vero aperiam quasi saepe? Corrupti!'
    },
    {
        id: 6,
        photo: 'https://cdn.motor1.com/images/mgl/eQp3E/s1/suzuki-jimny-lite.jpg',
        model: 'jimmy',
        year: 2019,
        brand: 'Suzuki',
        price: '$ 170,000',
        carSpecifications: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum repellendus in ad corrupti incidunt itaque sunt illo officiis esse. Aliquam quaerat non blanditiis animi vero aperiam quasi saepe? Corrupti!'
    },
    {
        id: 7,
        photo: 'https://loscoches.com/wp-content/uploads/2021/06/Honda-Nueva-CRV-Los-Coches.jpg.jpg',
        model: 'cr-v',
        year: 2020,
        brand: 'Honda',
        price: '$ 170,000',
        carSpecifications: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum repellendus in ad corrupti incidunt itaque sunt illo officiis esse. Aliquam quaerat non blanditiis animi vero aperiam quasi saepe? Corrupti!'
    },
    {
        id: 8,
        photo: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/12/20211214-toyota-compact-cruiser-ev-portada.jpg',
        model: 'cruiser',
        year: 2022,
        brand: 'Toyota',
        price: '$ 170,000',
        carSpecifications: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum repellendus in ad corrupti incidunt itaque sunt illo officiis esse. Aliquam quaerat non blanditiis animi vero aperiam quasi saepe? Corrupti!'
    }
]