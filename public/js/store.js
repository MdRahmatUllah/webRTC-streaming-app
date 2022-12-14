let state = {
    socketId: null,
    localStream: null,
    remoteStream: null,
    screenSharingStream: null,
    allowConnectionFromStrangers: false,
    screenSharingActive: false,
};

export const setSocketId = (socketId) => {
    state = {
        ...state,
        socketId: socketId,
    };
};

export const setLocalStream = (stream) => {
    state = {
        ...state,
        localStream: stream,
    };
};

export const setAllowConnectionFromStrangers = (allowConnection) => {
    state = {
        ...state,
        allowConnectionFromStrangers: allowConnection,
    };
};

export const setScreenSharingActive = (screenSharingActive) => {
    state = {
        ...state,
        screenSharingActive: screenSharingActive,
    };
};

export const setScreenSharingStream = (stream) => {
    state = {
        ...state,
        screenSharingStream: stream,
    };
};

export const setRemoteStream = (stream) => {
    state = {
        ...state,
        remoteStream: state,
    };
};

export const getState = () => {
    return state;
}

