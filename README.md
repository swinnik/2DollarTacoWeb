# Two Dollar Taco
A streamlined taco locator app.

## Description
User-generated database  of local taco spots, with a simple front-end to find the closest taco spot, wherever you are.
## Installation

1. Clone the repository.
2. Install dependencies by running `npm install`.
3. Start the development server by running `npm run dev`.

## Usage

To ADD a new taco spot, click the "New Taco Spot?" button.  Then give the name, (latitude and longitude are programatically input), the price of a taco, and best taco filling provided by the vendor.
To FIND a taco spot, simply click the "I'm Hungry" button. This will bring you to another page that automatically queries and filters the database results to  provide you with the closest taco.
If you don't like that spot,click "Not This Taco". This will provide the next closest vendor. After 5 rejected tacos, it seems like maybe you don't want a taco, so the same button brings you back to the main page.

## Folder Structure

In this repo, there are 2 main directories, /client and /server. All components are found under /client/src/components.  
The express server code is found in /server/index.js, with controllers, models, and routers all under their own directories.

## Technologies Used

Expresss.js, React, Javascript,  PostgreSQL, googleMapsAPI

## Contributing

We at Two Dollar Taco are commited to open source principals. However, if you want to contribute something other than code, feel free to donate :) by clicking the "Two Dollar Taco" button on the main page

## License

ISC

## Author

Sean Winnik

## Acknowledgements

Thank you every taco maker, this app wouldn't exist without you!
