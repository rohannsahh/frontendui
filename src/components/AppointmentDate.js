import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import background from "../assets/loginbackground.webp"
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate, setSelectedTime } from '../redux/slices/appointmentSlice';

const appointments =[
    {
        "sid": "11f48294-d180-4356-8d0c-4db24da16344",
        "date": "2024-06-28T00:00:00.000Z",
        "time": "2024-06-28T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:06:46.233Z",
        "updatedon": "2024-06-27T04:06:46.233Z"
    },
    {
        "sid": "8a038859-199d-4646-aca4-b4d370a66b0a",
        "date": "2024-06-28T00:00:00.000Z",
        "time": "2024-06-28T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:06:46.328Z",
        "updatedon": "2024-06-27T04:06:46.328Z"
    },
    {
        "sid": "36c184de-53cc-4fa9-9bd3-7519582d8062",
        "date": "2024-06-28T00:00:00.000Z",
        "time": "2024-06-28T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:06:46.424Z",
        "updatedon": "2024-06-27T04:06:46.424Z"
    },
    {
        "sid": "7c05dca5-6583-42c9-9f44-b431485e7aff",
        "date": "2024-06-28T00:00:00.000Z",
        "time": "2024-06-28T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:06:46.520Z",
        "updatedon": "2024-06-27T04:06:46.520Z"
    },
    {
        "sid": "17d0cb08-b0f3-4607-bd27-3c31475db31c",
        "date": "2024-06-28T00:00:00.000Z",
        "time": "2024-06-28T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:06:46.574Z",
        "updatedon": "2024-06-27T04:06:46.574Z"
    },
    {
        "sid": "5cf738f7-534e-43df-beef-6e09e6922263",
        "date": "2024-06-28T00:00:00.000Z",
        "time": "2024-06-28T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:06:46.629Z",
        "updatedon": "2024-06-27T04:06:46.629Z"
    },
    {
        "sid": "28cacb13-53d9-4b68-ac86-a35af2cdd0ce",
        "date": "2024-06-28T00:00:00.000Z",
        "time": "2024-06-28T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:06:46.725Z",
        "updatedon": "2024-06-27T04:06:46.725Z"
    },
    {
        "sid": "e21ed985-74bc-46c4-9767-d247f0ff1435",
        "date": "2024-06-28T00:00:00.000Z",
        "time": "2024-06-28T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:06:46.782Z",
        "updatedon": "2024-06-27T04:06:46.782Z"
    },
    {
        "sid": "52398bf9-6f34-4060-af0c-6f56265532a7",
        "date": "2024-06-29T00:00:00.000Z",
        "time": "2024-06-29T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:49.359Z",
        "updatedon": "2024-06-27T04:09:49.359Z"
    },
    {
        "sid": "80808490-48ce-4d58-84ab-40394eff21dc",
        "date": "2024-06-29T00:00:00.000Z",
        "time": "2024-06-29T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:49.468Z",
        "updatedon": "2024-06-27T04:09:49.468Z"
    },
    {
        "sid": "532a8f6f-f36a-4c5b-9a5c-8b5f6fcd0b9d",
        "date": "2024-06-29T00:00:00.000Z",
        "time": "2024-06-29T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:49.575Z",
        "updatedon": "2024-06-27T04:09:49.575Z"
    },
    {
        "sid": "82e364bf-eb33-485f-9366-f758531488be",
        "date": "2024-06-29T00:00:00.000Z",
        "time": "2024-06-29T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:49.683Z",
        "updatedon": "2024-06-27T04:09:49.683Z"
    },
    {
        "sid": "4484d7c0-6c5e-4d97-a8ac-fee67a7c485e",
        "date": "2024-06-29T00:00:00.000Z",
        "time": "2024-06-29T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:49.791Z",
        "updatedon": "2024-06-27T04:09:49.791Z"
    },
    {
        "sid": "839acd2a-75db-4241-b35b-a08e15ca7afa",
        "date": "2024-06-29T00:00:00.000Z",
        "time": "2024-06-29T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:49.899Z",
        "updatedon": "2024-06-27T04:09:49.899Z"
    },
    {
        "sid": "f7c0fb0c-66c3-43ab-b081-a8d62de97b0b",
        "date": "2024-06-29T00:00:00.000Z",
        "time": "2024-06-29T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:50.008Z",
        "updatedon": "2024-06-27T04:09:50.008Z"
    },
    {
        "sid": "0a0ffb4e-799c-4edc-ab32-8e24d77dee92",
        "date": "2024-06-29T00:00:00.000Z",
        "time": "2024-06-29T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:50.115Z",
        "updatedon": "2024-06-27T04:09:50.115Z"
    },
    {
        "sid": "088ab7b6-7f03-4c2d-9277-c185836bc184",
        "date": "2024-06-30T00:00:00.000Z",
        "time": "2024-06-30T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:55.256Z",
        "updatedon": "2024-06-27T04:09:55.256Z"
    },
    {
        "sid": "28df98ce-d3f6-4352-bbfc-ffe1e61b4ce8",
        "date": "2024-06-30T00:00:00.000Z",
        "time": "2024-06-30T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:55.363Z",
        "updatedon": "2024-06-27T04:09:55.363Z"
    },
    {
        "sid": "9c66c505-05b9-4acc-990e-10e93576e4da",
        "date": "2024-06-30T00:00:00.000Z",
        "time": "2024-06-30T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:55.471Z",
        "updatedon": "2024-06-27T04:09:55.471Z"
    },
    {
        "sid": "39699896-5b26-4d13-b739-9839255aed68",
        "date": "2024-06-30T00:00:00.000Z",
        "time": "2024-06-30T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:55.579Z",
        "updatedon": "2024-06-27T04:09:55.579Z"
    },
    {
        "sid": "1336e04e-3daf-4260-8c68-beabf8746327",
        "date": "2024-06-30T00:00:00.000Z",
        "time": "2024-06-30T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:55.687Z",
        "updatedon": "2024-06-27T04:09:55.687Z"
    },
    {
        "sid": "9e6f5230-539a-4787-9013-fb673f6e94dc",
        "date": "2024-06-30T00:00:00.000Z",
        "time": "2024-06-30T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:55.795Z",
        "updatedon": "2024-06-27T04:09:55.795Z"
    },
    {
        "sid": "8d03d243-b738-4abb-a89f-89ea253b8ac8",
        "date": "2024-06-30T00:00:00.000Z",
        "time": "2024-06-30T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:55.903Z",
        "updatedon": "2024-06-27T04:09:55.903Z"
    },
    {
        "sid": "222542b5-7663-47da-82f6-33373b06c071",
        "date": "2024-06-30T00:00:00.000Z",
        "time": "2024-06-30T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:09:56.011Z",
        "updatedon": "2024-06-27T04:09:56.011Z"
    },
    {
        "sid": "55362b4e-c610-47c4-a702-3978e9e03044",
        "date": "2024-07-01T00:00:00.000Z",
        "time": "2024-07-01T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:05.252Z",
        "updatedon": "2024-06-27T04:10:05.252Z"
    },
    {
        "sid": "973a848d-fd05-4878-8be1-b0dc2d6d0d80",
        "date": "2024-07-01T00:00:00.000Z",
        "time": "2024-07-01T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:05.359Z",
        "updatedon": "2024-06-27T04:10:05.359Z"
    },
    {
        "sid": "2a6f1a53-dd29-418a-8f86-b188f896dbcb",
        "date": "2024-07-01T00:00:00.000Z",
        "time": "2024-07-01T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:05.467Z",
        "updatedon": "2024-06-27T04:10:05.467Z"
    },
    {
        "sid": "21592200-ef71-4d67-9d29-470256eeaef9",
        "date": "2024-07-01T00:00:00.000Z",
        "time": "2024-07-01T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:05.575Z",
        "updatedon": "2024-06-27T04:10:05.575Z"
    },
    {
        "sid": "6f6af0be-5246-47db-a69a-d9c243825989",
        "date": "2024-07-01T00:00:00.000Z",
        "time": "2024-07-01T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:05.683Z",
        "updatedon": "2024-06-27T04:10:05.683Z"
    },
    {
        "sid": "8dd03fbe-212f-4b60-9879-ea7d2673ce93",
        "date": "2024-07-01T00:00:00.000Z",
        "time": "2024-07-01T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:05.792Z",
        "updatedon": "2024-06-27T04:10:05.792Z"
    },
    {
        "sid": "d77cb0a4-e721-48c2-8cef-b3fc374ab995",
        "date": "2024-07-01T00:00:00.000Z",
        "time": "2024-07-01T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:05.899Z",
        "updatedon": "2024-06-27T04:10:05.899Z"
    },
    {
        "sid": "350f5475-064b-4f30-b8c5-99867b0da35b",
        "date": "2024-07-01T00:00:00.000Z",
        "time": "2024-07-01T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:06.008Z",
        "updatedon": "2024-06-27T04:10:06.008Z"
    },
    {
        "sid": "6ccf82d7-c498-482c-8bce-ebe7ef69102c",
        "date": "2024-07-02T00:00:00.000Z",
        "time": "2024-07-02T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:12.172Z",
        "updatedon": "2024-06-27T04:10:12.172Z"
    },
    {
        "sid": "2a6616aa-a4b2-4b63-9eb8-ac119b7804a4",
        "date": "2024-07-02T00:00:00.000Z",
        "time": "2024-07-02T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:12.279Z",
        "updatedon": "2024-06-27T04:10:12.279Z"
    },
    {
        "sid": "83d4a2cd-373a-4eef-8ae3-093d4d3ed302",
        "date": "2024-07-02T00:00:00.000Z",
        "time": "2024-07-02T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:12.387Z",
        "updatedon": "2024-06-27T04:10:12.387Z"
    },
    {
        "sid": "474f5317-a42d-4b1c-b93f-b0ead15ad0f0",
        "date": "2024-07-02T00:00:00.000Z",
        "time": "2024-07-02T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:12.495Z",
        "updatedon": "2024-06-27T04:10:12.495Z"
    },
    {
        "sid": "0c59d0ac-4b68-448c-ba2e-6f2d82c76e72",
        "date": "2024-07-02T00:00:00.000Z",
        "time": "2024-07-02T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:12.603Z",
        "updatedon": "2024-06-27T04:10:12.603Z"
    },
    {
        "sid": "48b573d0-c769-45dd-bbd2-5157f06391d2",
        "date": "2024-07-02T00:00:00.000Z",
        "time": "2024-07-02T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:12.711Z",
        "updatedon": "2024-06-27T04:10:12.711Z"
    },
    {
        "sid": "364c2488-7e1a-43fa-8275-e116b7d4a22f",
        "date": "2024-07-02T00:00:00.000Z",
        "time": "2024-07-02T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:12.820Z",
        "updatedon": "2024-06-27T04:10:12.820Z"
    },
    {
        "sid": "4c6f3d13-f0f5-40c0-94bb-606d3543fe0e",
        "date": "2024-07-02T00:00:00.000Z",
        "time": "2024-07-02T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:12.927Z",
        "updatedon": "2024-06-27T04:10:12.927Z"
    },
    {
        "sid": "6c9784cd-fb27-49df-ae44-b66a6c046aa6",
        "date": "2024-07-03T00:00:00.000Z",
        "time": "2024-07-03T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:16.296Z",
        "updatedon": "2024-06-27T04:10:16.296Z"
    },
    {
        "sid": "3506e85c-c385-49ff-8d4e-b080123d03bb",
        "date": "2024-07-03T00:00:00.000Z",
        "time": "2024-07-03T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:16.403Z",
        "updatedon": "2024-06-27T04:10:16.403Z"
    },
    {
        "sid": "fc2470e6-eb23-436a-876b-1a31b9cc8e75",
        "date": "2024-07-03T00:00:00.000Z",
        "time": "2024-07-03T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:16.511Z",
        "updatedon": "2024-06-27T04:10:16.511Z"
    },
    {
        "sid": "fdaae018-b69d-4bea-9972-f32a8c542e86",
        "date": "2024-07-03T00:00:00.000Z",
        "time": "2024-07-03T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:16.619Z",
        "updatedon": "2024-06-27T04:10:16.619Z"
    },
    {
        "sid": "cf1aca71-3965-4e61-be27-fa05b55600b4",
        "date": "2024-07-03T00:00:00.000Z",
        "time": "2024-07-03T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:16.727Z",
        "updatedon": "2024-06-27T04:10:16.727Z"
    },
    {
        "sid": "a0828665-f8a3-412f-ab00-265289f3bde3",
        "date": "2024-07-03T00:00:00.000Z",
        "time": "2024-07-03T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:16.835Z",
        "updatedon": "2024-06-27T04:10:16.835Z"
    },
    {
        "sid": "ad4aeff6-1b1f-4df5-8808-55b3e633f08c",
        "date": "2024-07-03T00:00:00.000Z",
        "time": "2024-07-03T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:16.945Z",
        "updatedon": "2024-06-27T04:10:16.945Z"
    },
    {
        "sid": "76ef3144-940a-4356-8e43-ad296f109da7",
        "date": "2024-07-03T00:00:00.000Z",
        "time": "2024-07-03T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:17.051Z",
        "updatedon": "2024-06-27T04:10:17.051Z"
    },
    {
        "sid": "ce48a131-e604-4966-b325-ce430fe15e00",
        "date": "2024-07-04T00:00:00.000Z",
        "time": "2024-07-04T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:20.461Z",
        "updatedon": "2024-06-27T04:10:20.461Z"
    },
    {
        "sid": "3aa4e38f-149e-4cb7-bb4d-2ab8675ae06a",
        "date": "2024-07-04T00:00:00.000Z",
        "time": "2024-07-04T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:20.568Z",
        "updatedon": "2024-06-27T04:10:20.568Z"
    },
    {
        "sid": "4c457e86-6dec-4dde-ab7d-54b506cb42ec",
        "date": "2024-07-04T00:00:00.000Z",
        "time": "2024-07-04T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:20.675Z",
        "updatedon": "2024-06-27T04:10:20.675Z"
    },
    {
        "sid": "21c96235-207e-4481-b289-41a4c3e68caa",
        "date": "2024-07-04T00:00:00.000Z",
        "time": "2024-07-04T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:20.784Z",
        "updatedon": "2024-06-27T04:10:20.784Z"
    },
    {
        "sid": "03de43a3-f162-424a-b018-7d0769c7a3e6",
        "date": "2024-07-04T00:00:00.000Z",
        "time": "2024-07-04T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:20.849Z",
        "updatedon": "2024-06-27T04:10:20.849Z"
    },
    {
        "sid": "7137c900-8abf-4783-8397-380fd139700b",
        "date": "2024-07-04T00:00:00.000Z",
        "time": "2024-07-04T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:20.915Z",
        "updatedon": "2024-06-27T04:10:20.915Z"
    },
    {
        "sid": "148db1a7-2128-4c6e-841b-dc62197541f1",
        "date": "2024-07-04T00:00:00.000Z",
        "time": "2024-07-04T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:21.023Z",
        "updatedon": "2024-06-27T04:10:21.023Z"
    },
    {
        "sid": "ff2b808b-cc2e-42ee-86da-95907b05f61c",
        "date": "2024-07-04T00:00:00.000Z",
        "time": "2024-07-04T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:21.131Z",
        "updatedon": "2024-06-27T04:10:21.131Z"
    },
    {
        "sid": "c9298c2d-bb57-4e8f-9f17-7531426f408a",
        "date": "2024-07-05T00:00:00.000Z",
        "time": "2024-07-05T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:24.862Z",
        "updatedon": "2024-06-27T04:10:24.862Z"
    },
    {
        "sid": "ecc941c7-9afb-4576-a1a8-949da7f27098",
        "date": "2024-07-05T00:00:00.000Z",
        "time": "2024-07-05T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:24.928Z",
        "updatedon": "2024-06-27T04:10:24.928Z"
    },
    {
        "sid": "62173f61-9c59-439a-b212-4181c34793a4",
        "date": "2024-07-05T00:00:00.000Z",
        "time": "2024-07-05T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:25.035Z",
        "updatedon": "2024-06-27T04:10:25.035Z"
    },
    {
        "sid": "6f68f855-ea81-461b-88b9-b07e683ae446",
        "date": "2024-07-05T00:00:00.000Z",
        "time": "2024-07-05T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:25.143Z",
        "updatedon": "2024-06-27T04:10:25.143Z"
    },
    {
        "sid": "66a46dba-1e51-417a-a4d5-9deb7abab45b",
        "date": "2024-07-05T00:00:00.000Z",
        "time": "2024-07-05T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:25.251Z",
        "updatedon": "2024-06-27T04:10:25.251Z"
    },
    {
        "sid": "aa69b811-35c7-497e-b15b-7a54a139f411",
        "date": "2024-07-05T00:00:00.000Z",
        "time": "2024-07-05T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:25.359Z",
        "updatedon": "2024-06-27T04:10:25.359Z"
    },
    {
        "sid": "dfacd7f7-d19d-464f-9a36-afed253c6dbc",
        "date": "2024-07-05T00:00:00.000Z",
        "time": "2024-07-05T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:25.468Z",
        "updatedon": "2024-06-27T04:10:25.468Z"
    },
    {
        "sid": "5c266802-f6df-47f8-8ff2-08be870431f4",
        "date": "2024-07-05T00:00:00.000Z",
        "time": "2024-07-05T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:25.533Z",
        "updatedon": "2024-06-27T04:10:25.533Z"
    },
    {
        "sid": "f60e66ea-ee85-4125-a2d8-48e1870b3790",
        "date": "2024-07-06T00:00:00.000Z",
        "time": "2024-07-06T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:33.133Z",
        "updatedon": "2024-06-27T04:10:33.133Z"
    },
    {
        "sid": "cf0b29f4-2d07-48d8-811e-ae8b4734cfbd",
        "date": "2024-07-06T00:00:00.000Z",
        "time": "2024-07-06T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:33.239Z",
        "updatedon": "2024-06-27T04:10:33.239Z"
    },
    {
        "sid": "d5fe0174-46ae-4b1f-8ceb-d3f982f68c09",
        "date": "2024-07-06T00:00:00.000Z",
        "time": "2024-07-06T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:33.347Z",
        "updatedon": "2024-06-27T04:10:33.347Z"
    },
    {
        "sid": "fc3acdfe-e1c7-4681-aa89-041fbe134e8b",
        "date": "2024-07-06T00:00:00.000Z",
        "time": "2024-07-06T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:33.455Z",
        "updatedon": "2024-06-27T04:10:33.455Z"
    },
    {
        "sid": "5ee4bdea-f6d7-436e-af7d-142618e44552",
        "date": "2024-07-06T00:00:00.000Z",
        "time": "2024-07-06T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:33.563Z",
        "updatedon": "2024-06-27T04:10:33.563Z"
    },
    {
        "sid": "0c017188-67ce-489a-b701-d529517cc393",
        "date": "2024-07-06T00:00:00.000Z",
        "time": "2024-07-06T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:33.671Z",
        "updatedon": "2024-06-27T04:10:33.671Z"
    },
    {
        "sid": "286793e4-70ac-47e6-b3b0-c235891a31d5",
        "date": "2024-07-06T00:00:00.000Z",
        "time": "2024-07-06T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:33.779Z",
        "updatedon": "2024-06-27T04:10:33.779Z"
    },
    {
        "sid": "1841e1f3-af16-4493-911f-b75c2e849e5c",
        "date": "2024-07-06T00:00:00.000Z",
        "time": "2024-07-06T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:33.887Z",
        "updatedon": "2024-06-27T04:10:33.887Z"
    },
    {
        "sid": "15d89711-3d4d-4491-9876-55c59d31b0fc",
        "date": "2024-07-07T00:00:00.000Z",
        "time": "2024-07-07T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:38.743Z",
        "updatedon": "2024-06-27T04:10:38.743Z"
    },
    {
        "sid": "1864927c-ea24-488a-ae67-e92b22e6a222",
        "date": "2024-07-07T00:00:00.000Z",
        "time": "2024-07-07T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:38.851Z",
        "updatedon": "2024-06-27T04:10:38.851Z"
    },
    {
        "sid": "e828a175-3d41-4aca-a7b2-ae8a743be6d3",
        "date": "2024-07-07T00:00:00.000Z",
        "time": "2024-07-07T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:38.917Z",
        "updatedon": "2024-06-27T04:10:38.917Z"
    },
    {
        "sid": "713dd633-874a-4fc8-82c4-2feda5c47e53",
        "date": "2024-07-07T00:00:00.000Z",
        "time": "2024-07-07T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:39.024Z",
        "updatedon": "2024-06-27T04:10:39.024Z"
    },
    {
        "sid": "34a69f68-dcf1-4a81-b6ed-601133ae7821",
        "date": "2024-07-07T00:00:00.000Z",
        "time": "2024-07-07T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:39.132Z",
        "updatedon": "2024-06-27T04:10:39.132Z"
    },
    {
        "sid": "2a7d47ad-48cc-407a-a335-86196f9b9de7",
        "date": "2024-07-07T00:00:00.000Z",
        "time": "2024-07-07T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:39.197Z",
        "updatedon": "2024-06-27T04:10:39.197Z"
    },
    {
        "sid": "17075569-4dc6-402e-bd94-e8ebbe135f33",
        "date": "2024-07-07T00:00:00.000Z",
        "time": "2024-07-07T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:39.304Z",
        "updatedon": "2024-06-27T04:10:39.304Z"
    },
    {
        "sid": "72f3ceb1-dfc5-4d7e-8729-f5b9c3ecd7c4",
        "date": "2024-07-07T00:00:00.000Z",
        "time": "2024-07-07T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:39.369Z",
        "updatedon": "2024-06-27T04:10:39.369Z"
    },
    {
        "sid": "4319617d-b205-4bd7-8965-ce9e739d60a1",
        "date": "2024-07-08T00:00:00.000Z",
        "time": "2024-07-08T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:45.922Z",
        "updatedon": "2024-06-27T04:10:45.922Z"
    },
    {
        "sid": "e38f1107-5496-4953-b40a-b35d1f770f47",
        "date": "2024-07-08T00:00:00.000Z",
        "time": "2024-07-08T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:46.031Z",
        "updatedon": "2024-06-27T04:10:46.031Z"
    },
    {
        "sid": "ab0c08fa-f207-48f1-8953-2c2ff3c2396d",
        "date": "2024-07-08T00:00:00.000Z",
        "time": "2024-07-08T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:46.139Z",
        "updatedon": "2024-06-27T04:10:46.139Z"
    },
    {
        "sid": "d452db1f-ae2b-4d72-8963-99b9986b7582",
        "date": "2024-07-08T00:00:00.000Z",
        "time": "2024-07-08T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:46.247Z",
        "updatedon": "2024-06-27T04:10:46.247Z"
    },
    {
        "sid": "546d81ef-852b-4449-b567-5d132230e219",
        "date": "2024-07-08T00:00:00.000Z",
        "time": "2024-07-08T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:46.355Z",
        "updatedon": "2024-06-27T04:10:46.355Z"
    },
    {
        "sid": "af6d744c-1c3a-4a2a-a5a3-11f223ff0106",
        "date": "2024-07-08T00:00:00.000Z",
        "time": "2024-07-08T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:46.463Z",
        "updatedon": "2024-06-27T04:10:46.463Z"
    },
    {
        "sid": "e889ef5f-56ad-4595-8693-141c3d7038aa",
        "date": "2024-07-08T00:00:00.000Z",
        "time": "2024-07-08T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:46.571Z",
        "updatedon": "2024-06-27T04:10:46.571Z"
    },
    {
        "sid": "5a196a36-dc18-4863-83db-efe3a9a713c3",
        "date": "2024-07-08T00:00:00.000Z",
        "time": "2024-07-08T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:46.679Z",
        "updatedon": "2024-06-27T04:10:46.679Z"
    },
    {
        "sid": "1ace0e88-1e27-4944-af99-311e523ad351",
        "date": "2024-07-09T00:00:00.000Z",
        "time": "2024-07-09T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:50.063Z",
        "updatedon": "2024-06-27T04:10:50.063Z"
    },
    {
        "sid": "200b9b37-0a57-43fc-9af2-99f4eff786ff",
        "date": "2024-07-09T00:00:00.000Z",
        "time": "2024-07-09T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:50.171Z",
        "updatedon": "2024-06-27T04:10:50.171Z"
    },
    {
        "sid": "d6c8666d-5d25-4530-a31b-3b9dffb2e111",
        "date": "2024-07-09T00:00:00.000Z",
        "time": "2024-07-09T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:50.280Z",
        "updatedon": "2024-06-27T04:10:50.280Z"
    },
    {
        "sid": "359ecef3-9770-4764-affa-74e82026e04a",
        "date": "2024-07-09T00:00:00.000Z",
        "time": "2024-07-09T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:50.387Z",
        "updatedon": "2024-06-27T04:10:50.387Z"
    },
    {
        "sid": "6e41d61b-6f30-4c8c-8841-8d3f9664d2cb",
        "date": "2024-07-09T00:00:00.000Z",
        "time": "2024-07-09T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:50.495Z",
        "updatedon": "2024-06-27T04:10:50.495Z"
    },
    {
        "sid": "efe71221-4ff1-47bc-961d-261d3666f468",
        "date": "2024-07-09T00:00:00.000Z",
        "time": "2024-07-09T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:50.603Z",
        "updatedon": "2024-06-27T04:10:50.603Z"
    },
    {
        "sid": "f47f5053-a92e-477f-9b79-2ddda5fd3169",
        "date": "2024-07-09T00:00:00.000Z",
        "time": "2024-07-09T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:50.711Z",
        "updatedon": "2024-06-27T04:10:50.711Z"
    },
    {
        "sid": "c9399419-5173-4689-bbe9-560d07570126",
        "date": "2024-07-09T00:00:00.000Z",
        "time": "2024-07-09T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:50.819Z",
        "updatedon": "2024-06-27T04:10:50.819Z"
    },
    {
        "sid": "562503a0-e751-434c-b342-77d5c22ddc9b",
        "date": "2024-07-10T00:00:00.000Z",
        "time": "2024-07-10T10:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:55.278Z",
        "updatedon": "2024-06-27T04:10:55.278Z"
    },
    {
        "sid": "d68409fd-b806-4505-ab10-f45950e4910e",
        "date": "2024-07-10T00:00:00.000Z",
        "time": "2024-07-10T11:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:55.384Z",
        "updatedon": "2024-06-27T04:10:55.384Z"
    },
    {
        "sid": "04217002-1d17-49aa-b7c4-80dc60b2db39",
        "date": "2024-07-10T00:00:00.000Z",
        "time": "2024-07-10T12:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:55.450Z",
        "updatedon": "2024-06-27T04:10:55.450Z"
    },
    {
        "sid": "0edcb0e6-b6c2-4c48-974d-13160381c717",
        "date": "2024-07-10T00:00:00.000Z",
        "time": "2024-07-10T16:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:55.560Z",
        "updatedon": "2024-06-27T04:10:55.560Z"
    },
    {
        "sid": "ece430d5-70d8-455f-b652-489c3c91ab27",
        "date": "2024-07-10T00:00:00.000Z",
        "time": "2024-07-10T17:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:55.668Z",
        "updatedon": "2024-06-27T04:10:55.668Z"
    },
    {
        "sid": "2c418f51-9e11-4c0c-91b5-f25ca2e0100c",
        "date": "2024-07-10T00:00:00.000Z",
        "time": "2024-07-10T18:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:55.733Z",
        "updatedon": "2024-06-27T04:10:55.733Z"
    },
    {
        "sid": "85d7c647-5044-40e2-8e02-e0888a534713",
        "date": "2024-07-10T00:00:00.000Z",
        "time": "2024-07-10T19:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:55.799Z",
        "updatedon": "2024-06-27T04:10:55.799Z"
    },
    {
        "sid": "822b0758-70d9-41f7-ba3c-15750e124ca6",
        "date": "2024-07-10T00:00:00.000Z",
        "time": "2024-07-10T20:00:00.000Z",
        "status": true,
        "createdon": "2024-06-27T04:10:55.908Z",
        "updatedon": "2024-06-27T04:10:55.908Z"
    }
]


const AppointmentDate = () => {
  const selectedDate = useSelector((state) => state.appointment.selectedDate);
  const selectedTime = useSelector((state) => state.appointment.selectedTime);

  const [error, setError] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableTimes(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailableTimes = (date) => {
    const filteredAppointments = appointments.filter(app => 
      new Date(app.date).toDateString() === date.toDateString()
    );

    if (filteredAppointments.length === 0) {
      setError('No available times for the selected date.');
      setAvailableTimes([]);
    } else {
        const times = filteredAppointments.map(app => {
            const time = new Date(app.time);
            const adjustedTime = new Date(date);
            adjustedTime.setHours(time.getUTCHours(), time.getUTCMinutes());
            return adjustedTime;
          });
      setAvailableTimes(times);
      setError('');
    }
  };

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date));
    setError('');
  };

  const handleTimeChange = (time) => {
    const isValidTime = availableTimes.some((availableTime) => {
      return (
        availableTime.getUTCHours() === time.getUTCHours() &&
        availableTime.getUTCMinutes() === time.getUTCMinutes()
      );
    });
  
    if (isValidTime) {
      dispatch(setSelectedTime(time));
      setError('');
    } else {
      setError('*Please select a valid time from the available options!');
    }
  };

  
  const handleClick = () => {
    const isValidTime = availableTimes.some((availableTime) => {
      return (
        selectedTime &&
        availableTime.getUTCHours() === selectedTime.getUTCHours() &&
        availableTime.getUTCMinutes() === selectedTime.getUTCMinutes()
      );
    });

    if (!selectedDate || !selectedTime) {
      setError('*Please select both a date and time!');
    } else if (selectedDateTime && selectedDateTime < new Date()) {
      setError('*Please select a valid date and time!');
    } else if (!isValidTime) {
      setError('*Please select a valid time from the available options!');
    } else {
      navigate('/choosePrice');
    }
  };

  const combineDateTime = (date, time) => {
    if (!date || !time) return null;
    const combined = new Date(date);
    combined.setHours(time.getHours(), time.getMinutes());
    return combined;
  };

  const selectedDateTime = combineDateTime(selectedDate, selectedTime);

  const getUniqueDates = (appointments) => {
    const dates = appointments.map(app => new Date(app.date).toDateString());
    return [...new Set(dates)].map(date => new Date(date));
  };

  const availableDates = getUniqueDates(appointments);


  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
    }}>
        <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}></div>
      <div className="bg-white relative rounded-lg shadow-lg p-4 w-full max-w-xl">
      <div className="absolute">
         <button className='p-0' onClick={()=>{navigate('/attachDocuments')}}><img src={require('../assets/back-button.png')} alt='previous'/></button>
        </div >
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#191983] sm:m-3">
          &nbsp; &nbsp; &nbsp; 3/4 Choose Appointment Date and Time
        </h2>
        </div>
        <div className="flex flex-col items-center">
        <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            minDate={new Date()}
            filterDate={(date) => availableDates.some(d => d.toDateString() === date.toDateString())}
            dateFormat="Pp"
            className="w-full"
          />
          <DatePicker
            selected={selectedTime}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h:mm aa"
            includeTimes={availableTimes}
            className="w-full border-gray-500 rounded-md shadow-md border m-1 p-1 text-center mt-4"
            placeholderText="Select Time"

          />
        </div>
        {error && <div className="text-red-500 animate-vibrate font-semibold text-lg text-center">{error}</div>}
        <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-[#191983] text-white py-1 px-6 text-base lg:text-xl rounded-lg mt-4 focus:outline-none hover:bg-blue-800"
              onClick={handleClick}>
              Next
            </button>
          </div>
      </div>
    </div>
  );
};

export default AppointmentDate;
