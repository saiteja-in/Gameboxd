import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>order by relevance</MenuButton>
            <MenuList>
                <MenuItem>fdsaf</MenuItem>
                <MenuItem>sd</MenuItem>
                <MenuItem>dfa</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector
