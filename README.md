# sensors.AFRICA SeaSensors-Map

Sea Sensors is an acoustic data project that falls under the [sensors.AFRICA](https://sensors.africa) umbrella.

The project uses hydrophone sensors submerged underwater at locations off Tanzania’s coast that record underwater sounds,
including dynamite blasts, and is expected to record this information over the course of an entire year.
The sensors.AFRICA-SeaSensors-map project is expected to present this data in a visually appealing interactive map.

Our primary goal of the map is to:

1. Show physical locations(geolocation) of the sensors deployed on the map.
2. Shows the geographic locations of blast where availble , and where not available, showcase the bearing to the blast (as lines originating from the detector).
3. Show a counter that gives a summary of the blast detected according to time, day, today state etc
4. Allow users to view a timeseries of the data and to play, pause or toggle sounds of the explosions.

## Development

Run the following commands to get started:

```
  yarn
  source .env
  yarn build
  yarn dev
```
