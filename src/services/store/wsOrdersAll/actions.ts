const websocketConnectProfile = (payload: string) => ({
  type: "WEBSOCKET_CONNECT",
  payload,
});

export { websocketConnectProfile };
