import React, { useEffect, useState } from 'react'
import { Avatar, Center, Text, Stack, Paper, Image } from '@mantine/core'
import Service from '../../utils/http'

const obj = new Service();

export default function Profile() {
  const [user, setUser] = useState({})

  const getProfileData = async () => {
    try {
      let data = await obj.get("user/me")
      setUser(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <Center>
      <Paper
        shadow="md"
        radius="lg"
        p="lg"
        withBorder
        style={{ minWidth: 260, textAlign: 'center' }}
      >
        <Stack align="center" spacing="sm">
          {/* Avatar */}
          <Avatar
            src={user?.avatar}
            alt={user?.name}
            radius="xl"
            size={80}
          >
            {user?.name?.charAt(0)}
          </Avatar>

          {/* Name + Roll Number in styled box */}
          <Paper
            shadow="xs"
            radius="md"
            p="sm"
            withBorder
            style={{ backgroundColor: '#f8f9fa', width: '100%' }}
          >
            <Stack spacing={2} align="center">
              <Text fw={500} size="lg" c="blue">
                {user?.name}
              </Text>
              <Text size="sm" c="dimmed">
                {user?.rollNumber || "Roll No: 2210040104"} {/* fallback */}
              </Text>
            </Stack>
          </Paper>

          
        </Stack>
      </Paper>
    </Center>
  )
}
