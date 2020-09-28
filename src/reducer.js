export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    //Remove after finished developing ..
    //token : 'BQAVxHp2baE0AHPB-HEwNOd2x4GiKGatEHC9YVH2l7qbJvpKL_jxg5O5yBxop3c_zV3_177m73YM27Waouhdyuzr53JUY6VNF_zzql6DNh1PCzyAYOcKaFe4gw_Coxm8mZaoEbDGIZ2qoAqHpT3Kd06tD_PCbgaJ10GSyDv0W3dOCOQz'
}

const reducer = (state, action) => {
    console.log(action);

    //Action -> type,[payload]
    switch(action.type) { 
        case 'SET_USER': 
            return {
                ...state,
                user : action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token : action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            };
            
        default : 
            return state;
    }
}

export default reducer;