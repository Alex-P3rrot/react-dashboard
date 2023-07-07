import {ResponsiveBar} from "@nivo/bar";
import Header from "../../components/Header";
import {Box} from "@mui/material";

export function Bar() {
    const data = [
        {
            "country": "AD",
            "hot dog": 159,
            "hot dogColor": "hsl(241, 70%, 50%)",
            "burger": 121,
            "burgerColor": "hsl(258, 70%, 50%)",
            "sandwich": 126,
            "sandwichColor": "hsl(235, 70%, 50%)",
            "kebab": 74,
            "kebabColor": "hsl(216, 70%, 50%)",
            "fries": 179,
            "friesColor": "hsl(156, 70%, 50%)",
            "donut": 77,
            "donutColor": "hsl(290, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 100,
            "hot dogColor": "hsl(220, 70%, 50%)",
            "burger": 113,
            "burgerColor": "hsl(348, 70%, 50%)",
            "sandwich": 84,
            "sandwichColor": "hsl(237, 70%, 50%)",
            "kebab": 141,
            "kebabColor": "hsl(354, 70%, 50%)",
            "fries": 94,
            "friesColor": "hsl(327, 70%, 50%)",
            "donut": 151,
            "donutColor": "hsl(308, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 191,
            "hot dogColor": "hsl(17, 70%, 50%)",
            "burger": 144,
            "burgerColor": "hsl(91, 70%, 50%)",
            "sandwich": 85,
            "sandwichColor": "hsl(330, 70%, 50%)",
            "kebab": 184,
            "kebabColor": "hsl(245, 70%, 50%)",
            "fries": 157,
            "friesColor": "hsl(70, 70%, 50%)",
            "donut": 177,
            "donutColor": "hsl(304, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 185,
            "hot dogColor": "hsl(27, 70%, 50%)",
            "burger": 115,
            "burgerColor": "hsl(217, 70%, 50%)",
            "sandwich": 57,
            "sandwichColor": "hsl(139, 70%, 50%)",
            "kebab": 114,
            "kebabColor": "hsl(107, 70%, 50%)",
            "fries": 71,
            "friesColor": "hsl(106, 70%, 50%)",
            "donut": 168,
            "donutColor": "hsl(73, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 29,
            "hot dogColor": "hsl(300, 70%, 50%)",
            "burger": 190,
            "burgerColor": "hsl(126, 70%, 50%)",
            "sandwich": 44,
            "sandwichColor": "hsl(75, 70%, 50%)",
            "kebab": 72,
            "kebabColor": "hsl(156, 70%, 50%)",
            "fries": 66,
            "friesColor": "hsl(219, 70%, 50%)",
            "donut": 41,
            "donutColor": "hsl(185, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 161,
            "hot dogColor": "hsl(49, 70%, 50%)",
            "burger": 65,
            "burgerColor": "hsl(326, 70%, 50%)",
            "sandwich": 40,
            "sandwichColor": "hsl(174, 70%, 50%)",
            "kebab": 151,
            "kebabColor": "hsl(68, 70%, 50%)",
            "fries": 182,
            "friesColor": "hsl(285, 70%, 50%)",
            "donut": 165,
            "donutColor": "hsl(52, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 191,
            "hot dogColor": "hsl(356, 70%, 50%)",
            "burger": 159,
            "burgerColor": "hsl(90, 70%, 50%)",
            "sandwich": 122,
            "sandwichColor": "hsl(169, 70%, 50%)",
            "kebab": 142,
            "kebabColor": "hsl(17, 70%, 50%)",
            "fries": 196,
            "friesColor": "hsl(249, 70%, 50%)",
            "donut": 21,
            "donutColor": "hsl(265, 70%, 50%)"
        }
    ]

    return (
        <Box padding={2} height="80vh" width="80vw">
            <Header title="Bar chart" subtitle="Simple responsive bar chart"/>
            <ResponsiveBar
                data={data}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{top: 50, right: 130, bottom: 50, left: 60}}
                padding={0.3}
                valueScale={{type: 'linear'}}
                indexScale={{type: 'band', round: true}}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
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
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />
        </Box>
    )
}