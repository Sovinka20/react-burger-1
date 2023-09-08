const websocketConnect = (payload: string) => ({
  type: "WEBSOCKET_CONNECT",
  payload,
});

export { websocketConnect };
