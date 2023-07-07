import {ResponsivePie} from "@nivo/pie";
import {Box} from "@mui/material";
import Header from "../../components/Header";

export function Pie() {
    const data = [
        {
            "id": "python",
            "label": "python",
            "value": 519,
            "color": "hsl(311, 70%, 50%)"
        },
        {
            "id": "stylus",
            "label": "stylus",
            "value": 312,
            "color": "hsl(302, 70%, 50%)"
        },
        {
            "id": "lisp",
            "label": "lisp",
            "value": 307,
            "color": "hsl(349, 70%, 50%)"
        },
        {
            "id": "java",
            "label": "java",
            "value": 466,
            "color": "hsl(178, 70%, 50%)"
        },
        {
            "id": "php",
            "label": "php",
            "value": 112,
            "color": "hsl(324, 70%, 50%)"
        }
    ]

    return (
            <Box padding={2} height="80vh" width="80vw">
                <Header title="Pie chart" subtitle="Simple responsive pie chart"/>
                <ResponsivePie
                    data={data}
                    margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    activeOuterRadiusOffset={8}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#fff"
                    arcLinkLabelsThickness={3}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                2
                            ]
                        ]
                    }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255,255,255,0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'python'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'lisp'
                            },
                            id: 'lines'
                        }
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            translateY: 56,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#fff',
                            symbolSize: 20,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: '.7'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </Box>
    )
}