import Reviews from "./modules/Reviews";
import AccidentProcess from "./homePageComponents/AccidentProcess";
import tnsAnime from "../assets/tnsAnime.mp4";
import Header from "./modules/Header";
import { Button, Divider, Grid, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RepairProcess from "./homePageComponents/RepairProcess";
import useWindowDimensions from "./useWindowDimensions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const { width } = useWindowDimensions();
  const [accidentModalOpen, setAccidentModalOpen] = useState(false);
  const [repairModalOpen, setRepairModalOpen] = useState(false);
  const handleAccidentModalOpen = () => setAccidentModalOpen(true);
  const handleAccidentModalClose = () => setAccidentModalOpen(false);
  const handleRepairModalOpen = () => setRepairModalOpen(true);
  const handleRepairModalClose = () => setRepairModalOpen(false);

  return (
    <div>
      <Header />
      <div className="videoAndModalsContainer">
        <div>
          <video
            className="VideoTag"
            autoPlay
            loop
            muted
            style={{
              width: "94%",
              padding: "3%",
            }}
          >
            <source src={tnsAnime} type="video/mp4" />
          </video>
        </div>

        <Grid containter padding={2} sx={{ alignSelf: "center" }}>
          <Grid paddingBottom={5} xs={width < 900 ? 5 : 12}>
            <Stack>
              <Typography variant="h5">
                Do you know what to do after accident happpen?
              </Typography>
              <Button
                className="moduelButton"
                onClick={handleAccidentModalOpen}
              >
                <Typography variant="body2">
                  HOW TO HANDLE ACCIDENT PROFESSIONALLY →
                </Typography>
              </Button>
            </Stack>
          </Grid>
          <Grid>
            <Stack>
              <Typography variant="h5">
                Do you know our repair process?
              </Typography>
              <Button className="moduelButton" onClick={handleRepairModalOpen}>
                <Typography variant="body2">
                  LEARN MORE ABOUT OUR REPAIR PROCESS →
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </div>

      <Grid container xs={12} columnGap={15} className="highlight">
        <Box>
          <Stack>
            <Typography variant="h4" padding={1}>
              25+
            </Typography>
            <Divider variant="middle" />
            <Typography variant="body1" padding={1}>
              Year of Experience
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Typography variant="h4" padding={1}>
              130+
            </Typography>
            <Divider variant="middle" />
            <Typography variant="body1" padding={1}>
              Fully Trained Staff
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Typography variant="h4" padding={1}>
              14
            </Typography>
            <Divider variant="middle" />
            <Typography variant="body1" paddingTop={1}>
              Parner With
            </Typography>
            <Typography variant="body1">Major Insurance</Typography>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Typography variant="h4" padding={1}>
              Top 10
            </Typography>
            <Divider variant="middle" />
            <Typography variant="body1" padding={1}>
              Rank in East Coast
            </Typography>
          </Stack>
        </Box>
      </Grid>
      <Grid xs={12} className="highlight" paddingTop={0}>
        <Stack>
          <Typography variant="h3" color={"darkslategray"}>
            Lifetime Warranty
          </Typography>
          <Typography
            variant="body1"
            paddingTop={5}
            paddingLeft={25}
            paddingRight={25}
          >
            Your repair is guaranteed for as long as you own your car. Our
            warranty covers the mechanics, paint, parts and collision work
            associated with your claim. Other warranties may apply.
          </Typography>
          <Typography variant="caption" paddingTop={2}>
            * Make sure keep the invoice for Lifetime Warranty, labor not
            included
          </Typography>
        </Stack>
      </Grid>
      <Reviews />

      <Modal open={accidentModalOpen} onClose={handleAccidentModalClose}>
        <Box sx={style}>
          <div className="homeModalButtonContainer">
            <button
              type="button"
              size="small"
              onClick={handleAccidentModalClose}
            >
              X
            </button>
          </div>
          <div>
            <AccidentProcess />
          </div>
        </Box>
      </Modal>
      <Modal
        open={repairModalOpen}
        onClose={handleRepairModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div className="homeModalButtonContainer">
            <button
              size="small"
              onClick={handleRepairModalClose}
              className="galleryModalButton"
            >
              X
            </button>
          </div>
          <Box sx={style}>
            <div className="homeModalButtonContainer">
              <button size="small" onClick={handleRepairModalClose}>
                X
              </button>
            </div>
            <div>
              <RepairProcess />
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

