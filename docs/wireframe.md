# Top Spots - Component Tree & Data Flow

## Component Tree

```
App
 └── TopSpots
      └── TopSpot (x30)
```

## State & Props Flow

### App (Root Component)
- **State**: `topspots` (array, initialized as `[]`)
- **Effect**: On mount, fetches data via `axios.get('https://ccc.helloworldbox.com/items/top_spots')`
- **Passes**: `spots={topspots}` to `<TopSpots />`

### TopSpots
- **Props**: `spots` (array of spot objects)
- **Renders**: Maps over `spots` and renders a `<TopSpot />` for each item
- **Passes**: `name`, `description`, `location` to each `<TopSpot />`

### TopSpot
- **Props**: `name` (string), `description` (string), `location` (array `[lat, lng]`)
- **Renders**: Bootstrap card with title, description, and Google Maps link

## Data Shape

```json
{
  "id": 1,
  "name": "Go For A Run In The San Diego Zoo Safari Park",
  "description": "A half marathon on a trail running through the Safari Park...",
  "location": [33.09745, -116.99572]
}
```
