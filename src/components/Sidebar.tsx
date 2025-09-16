import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      <Box>
        <NavLink
          label="MarathonRegisterPage1"
          component={RouterNavLink}
          to="/"
        />
        <NavLink
          label="MarathonRegisterPage2"
          component={RouterNavLink}
          to="/MarathonRegisterPage2"
        />
      </Box>
      <Box p={10}>
        <Group>
          <Indicator
            inline
            size={12}
            offset={7}
            position="bottom-end"
            color="red"
            withBorder
          >
            <Avatar size="md" radius="xl" src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/117403631_656666138534223_1576702068341507713_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFe0MZ9SnWBBgmK5ZFBwbGwDkYStvv0BYcORhK2-_QFh-TbVRAs9ddApUuvA2CZS8rvPUpQIQ9UCkiB5E74gAgQ&_nc_ohc=W9vgETK3np8Q7kNvwFLumgU&_nc_oc=AdnaSlp5tUIzJjzGiO07OJmoajecYNUh1teEud0Hf7YF40aecQVerPcgiNQPNEbh27o&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=85MbI6iHw71admKdk_25Xw&oh=00_AfaNkKBYtgfQQhvquRZYHl5az8hLBY6hcPeEoTmhH02ZLA&oe=68F0B0F4" />
          </Indicator>
          <Text component={RouterNavLink} to="/">
            User : Thanakorn : Student
          </Text>
        </Group>
      </Box>
    </Stack>
  );
}