import { View } from "react-native";


interface GridViewProps{
    rowCount: number;
    gap: number;
    childrens: JSX.Element[];
}

export function GridView(props: GridViewProps){
    const ui = Array(props.childrens.length / props.rowCount)
        .map((_) => (
            <View
                style={{
                    flex: props.gap
                }}
            >
                
            </View>
        ))

    return (
        <View style={[
            { gap: props.gap },

        ]}>

        </View>
    );
}

export default GridView;