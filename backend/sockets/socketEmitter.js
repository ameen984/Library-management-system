// sockets/socketEmitter.js

/**
 * Safely emit socket events from controllers
 * @param {Object} req - Express request object
 * @param {string} event - Socket event name
 * @param {Object} payload - Data to send
 */
export const emitSocketEvent = (req, event, payload) => {
  try {
    const io = req.app.get("io");

    // Guard: Socket.IO might not be available
    if (!io) {
      console.warn("⚠️ Socket.IO instance not found. Event not emitted:", event);
      return;
    }
      console.log(`🔔 Socket event emitted → ${event}`, payload);

    io.emit(event, payload);
  } catch (error) {
    console.error("❌ Socket emit failed:", error.message);
  }
};
