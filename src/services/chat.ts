import { Client, Conversation, Paginator } from '@twilio/conversations'

export const createOrJoinRoom = async (room: string, accessToken: string) => {
  const client = new Client(accessToken)

  return new Promise(resolve => {
    client.on('stateChanged', async state => {
      if (state === 'initialized') {
        let conversation
        try {
          conversation = await client.createConversation({ uniqueName: room })
          conversation.join()
        } catch (e) {
          // If the room already exists, join it
          console.error(e)
          try {
            conversation = await client.getConversationByUniqueName(room)
            //conversation.add(client.user.identity)
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

export const createConversation = async (conversationName: string, accessToken: string): Promise<Conversation> => {
  const client = new Client(accessToken)

  return new Promise((resolve, reject) => {
    client.on('stateChanged', async state => {
      if (state === 'initialized') {
        try {
          const conversation = await client.createConversation({ uniqueName: conversationName })
          conversation.join()
          resolve(conversation)
        } catch (error) {
          reject({ error, message: 'Error creating conversation, maybe conversation already exists?' })
        }
      }
    })
  })
}

export const joinConversation = async (conversationSID: string, accessToken: string) => {
  const client = new Client(accessToken)

  return new Promise((resolve, reject) => {
    client.on('stateChanged', async state => {
      if (state === 'initialized') {
        try {
          const conversation = await client.getConversationBySid(conversationSID)
          resolve(conversation)
        } catch (error) {
          reject({ error, message: 'Error joining conversation, maybe you are not in the conversation?' })
        }
      }
    })
  })
}

export const getJoinedConversations = async (accessToken: string): Promise<Paginator<Conversation>> => {
  const client = new Client(accessToken)

  return new Promise((resolve, reject) => {
    client.on('stateChanged', async state => {
      if (state === 'initialized') {
        try {
          const conversations = await client.getSubscribedConversations()
          resolve(conversations)
        } catch (error) {
          reject({ error, message: 'Error getting conversations' })
        }
      }
    })
  })
}