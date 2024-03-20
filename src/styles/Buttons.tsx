import { styled } from '@/styles/stitches.config';
import { colors } from '@/styles/Global'

export const Button = styled('button', {
    height: "2.75rem",
    appearance: "none",
    background: "$brand2",
    color: "$grey",
    fontWeight: "600",
    padding: "0 2rem",
    border: "2px solid $whiteFixed",
    borderRadius: "$1",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "$texts",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "max-content",

    variants: {
        type: {
            btLink: {
                background: "transparent",
                border: "3px solid $brand2",
               /*  borderColor: "$brand2", */
            },
            primary: {
                background: "$brand1",
                borderColor: "$brand1",
                color: "$grey4",
                "&:hover": {
                    backgroundColor: "$brand2",
                    color: "$grey1",
                    borderColor: "$brand2",
                }
            },
            icon: {
                borderColor: "$grey5",
                backgroundColor: "$brand3",
                "&:hover": {
                    backgroundColor: "$brand1",
                }
            },
            circle: {
                borderColor: "$grey5",
                backgroundColor: "$whiteFixed",
                borderRadius: "50%",
                padding: "0",
                width: "2.75rem",
                height: "2.75rem",
                "&:hover": {
                    backgroundColor: "$grey5",
                }
            }
        },
        ...colors
    }
})