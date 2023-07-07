import {ResponsiveLine} from "@nivo/line";
import Header from "../../components/Header";
import {Box, Typography} from "@mui/material";

export function Line() {
    const data = [
        {
            "id": "japan",
            "color": "hsl(276, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 228
                },
                {
                    "x": "helicopter",
                    "y": 150
                },
                {
                    "x": "boat",
                    "y": 67
                },
                {
                    "x": "train",
                    "y": 144
                },
                {
                    "x": "subway",
                    "y": 20
                },
                {
                    "x": "bus",
                    "y": 10
                },
                {
                    "x": "car",
                    "y": 139
                },
                {
                    "x": "moto",
                    "y": 92
                },
                {
                    "x": "bicycle",
                    "y": 288
                },
                {
                    "x": "horse",
                    "y": 236
                },
                {
                    "x": "skateboard",
                    "y": 62
                },
                {
                    "x": "others",
                    "y": 170
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(237, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 130
                },
                {
                    "x": "helicopter",
                    "y": 115
                },
                {
                    "x": "boat",
                    "y": 33
                },
                {
                    "x": "train",
                    "y": 21
                },
                {
                    "x": "subway",
                    "y": 154
                },
                {
                    "x": "bus",
                    "y": 98
                },
                {
                    "x": "car",
                    "y": 36
                },
                {
                    "x": "moto",
                    "y": 4
                },
                {
                    "x": "bicycle",
                    "y": 87
                },
                {
                    "x": "horse",
                    "y": 178
                },
                {
                    "x": "skateboard",
                    "y": 35
                },
                {
                    "x": "others",
                    "y": 226
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(316, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 51
                },
                {
                    "x": "helicopter",
                    "y": 215
                },
                {
                    "x": "boat",
                    "y": 10
                },
                {
                    "x": "train",
                    "y": 235
                },
                {
                    "x": "subway",
                    "y": 106
                },
                {
                    "x": "bus",
                    "y": 12
                },
                {
                    "x": "car",
                    "y": 150
                },
                {
                    "x": "moto",
                    "y": 16
                },
                {
                    "x": "bicycle",
                    "y": 33
                },
                {
                    "x": "horse",
                    "y": 117
                },
                {
                    "x": "skateboard",
                    "y": 94
                },
                {
                    "x": "others",
                    "y": 214
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(162, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 132
                },
                {
                    "x": "helicopter",
                    "y": 190
                },
                {
                    "x": "boat",
                    "y": 130
                },
                {
                    "x": "train",
                    "y": 199
                },
                {
                    "x": "subway",
                    "y": 244
                },
                {
                    "x": "bus",
                    "y": 137
                },
                {
                    "x": "car",
                    "y": 1
                },
                {
                    "x": "moto",
                    "y": 219
                },
                {
                    "x": "bicycle",
                    "y": 218
                },
                {
                    "x": "horse",
                    "y": 70
                },
                {
                    "x": "skateboard",
                    "y": 233
                },
                {
                    "x": "others",
                    "y": 196
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(324, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 127
                },
                {
                    "x": "helicopter",
                    "y": 266
                },
                {
                    "x": "boat",
                    "y": 107
                },
                {
                    "x": "train",
                    "y": 230
                },
                {
                    "x": "subway",
                    "y": 75
                },
                {
                    "x": "bus",
                    "y": 84
                },
                {
                    "x": "car",
                    "y": 18
                },
                {
                    "x": "moto",
                    "y": 277
                },
                {
                    "x": "bicycle",
                    "y": 96
                },
                {
                    "x": "horse",
                    "y": 186
                },
                {
                    "x": "skateboard",
                    "y": 92
                },
                {
                    "x": "others",
                    "y": 52
                }
            ]
        }
    ]

    return (
        <Box padding={2} height="80vh" width="80vw">
            <Header title="Line chart" subtitle="Simple responsive line chart"/>
            <ResponsiveLine
                data={data}
                margin={{top: 50, right: 110, bottom: 50, left: 60}}
                xScale={{type: 'point'}}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                pointSize={8}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 100,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        itemTextColor: '#fff',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                axisBottom={{
                    tickRotation: -35,
                }}
                theme={{
                    textColor: '#fff'
                }}
            />
        </Box>
    )
}