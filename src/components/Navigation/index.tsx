import { Drawer as MuiDrawer, styled } from '@mui/material';

import { navClosedMixin, navOpenedMixin } from '../../styles/mixins';
import { DRAWER_WIDTH } from '../../utils/constants';
import { Routes } from './Routes';

interface NavigationProps {
  open: boolean | undefined;
  handleClose: () => void;
}

export const Navigation = ({ open, handleClose }: NavigationProps) => {
  return (
    <Drawer variant="permanent" open={open} onClose={handleClose}>
      <DrawerHeader />
      <Routes />
    </Drawer>
  );
};

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...navOpenedMixin(theme),
    '& .MuiDrawer-paper': navOpenedMixin(theme),
  }),
  ...(!open && {
    ...navClosedMixin(theme),
    '& .MuiDrawer-paper': navClosedMixin(theme),
  }),
}));
