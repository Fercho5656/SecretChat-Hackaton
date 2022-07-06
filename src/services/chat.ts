import { Client, Conversation } from '@twilio/conversations'

export const createOrJoinRoom = async (room: string, accessToken: string) => {
  const client = new Client(accessToken)

  return new Promise(resolve => {
    client.on('stateChanged', async state => {
      if (state === 'initialized') {
        let conversation
        try {
          conversation = await client.createConversation({ uniqueName: room })
        } catch (e) {
          // If the room already exists, join it
          console.error(e)
          try {
            conversation = await client.getConversationByUniqueName(room)
          } catch (e) {
            console.error(e)
          }
        }
        console.log(conversation)
        resolve(conversation)
      }
    })
  })
}