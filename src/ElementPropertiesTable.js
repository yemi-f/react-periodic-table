import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


function ElementPropertiesTable(props) {
    const { elements } = props;
    return (
        <>
            <table id="all-elements-table">
                <TableHeader />
                <TableBody elements={elements} />
            </table>
        </>
    )

}

const onMouseOver = event => {
    const e = event.target;
    e.style.background = "linear-gradient(145deg, #dddddd, #ffffff)";
    e.style.boxShadow = "inset 20px 20px 60px #d0d0d0, inset -20px -20px 60px #ffffff"
}

const onMouseOut = event => {
    const e = event.target;
    e.style.background = "#F5F5F5";
    e.style.boxShadow = "20px 20px 60px #d0d0d0,-20px -20px 60px #ffffff";
}

const TableHeader = () => {
    return (
        <thead id="table-header">
            <tr>
                <th>Atomic Number</th>
                <th>Symbol</th>
                <th>Name</th>
                <th>Atomic Mass (u)</th>
            </tr>
        </thead>
    )
}

const itemStyle = {

}

const TableBody = (props) => {

    // const [isOpen, setIsOpen] = useState(false);
    const [openId, setOpenId] = useState(0)

    const rows = props.elements.map((element) => {


        const showModal = (id) => {
            // setIsOpen(true);
            setOpenId(id);
        }

        const hideModal = () => {
            // setIsOpen(false);
            setOpenId(null);
        }

        const createWikiUrl = (string) => {
            return "https://www.wikipedia.org/wiki/" + string
        }

        const ShowModalData = ({ e }) => {
            return (
                <React.Fragment>
                    <div id="properties-div" className="p-3">
                        <h3>{e.atomicNumber}</h3>
                        <h1 className="display-1">{e.symbol}</h1>
                        <h3>{e.name}</h3>
                        <h5 className="text-lowercase">{e.groupBlock}</h5>
                    </div>
                    <Table>
                        <tbody>
                            <tr>
                                <th>Atomic Mass</th>
                                <td>{e.atomicMass} u</td>
                            </tr>
                            <tr>
                                <th>Standard State</th>
                                <td>{e.standardState}</td>
                            </tr>
                            <tr>
                                <th>van der Waals Radius</th>
                                <td>{e.vanDelWaalsRadius}</td>
                            </tr>
                            <tr>
                                <th>Density</th>
                                <td>{e.density} g/cm<sup>3</sup></td>
                            </tr>
                            <tr>
                                <th>Year Discovered</th>
                                <td>{e.yearDiscovered}</td>
                            </tr>
                            <tr>
                                <th>Element Wiki</th>
                                <td>
                                    <a href={createWikiUrl(e.name)} target="_blank">{e.name} <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </React.Fragment>
            )
        }

        return (
            <tr key={element.atomicNumber} className="element-row" >
                <td className="row-item" onClick={() => showModal(element.atomicNumber)}
                    onMouseEnter={element => onMouseOver(element)}
                    onMouseOut={element => onMouseOut(element)}>
                    {element.atomicNumber}
                </td>
                <td className="row-item" style={itemStyle} onClick={() => showModal(element.atomicNumber)}
                    onMouseEnter={element => onMouseOver(element)}
                    onMouseOut={element => onMouseOut(element)}>
                    {element.symbol}
                </td>
                <td className="row-item"
                    onClick={() => showModal(element.atomicNumber)}
                    onMouseEnter={element => onMouseOver(element)}
                    onMouseOut={element => onMouseOut(element)}
                >{element.name}</td>
                <td className="row-item" onClick={() => showModal(element.atomicNumber)}
                    onMouseEnter={element => onMouseOver(element)}
                    onMouseOut={element => onMouseOut(element)}>{element.atomicMass}</td>

                <Modal centered show={openId === element.atomicNumber} onHide={hideModal}>
                    <Modal.Header closeButton className="border-0">
                    </Modal.Header>
                    <Modal.Body>
                        <ShowModalData e={element} />
                    </Modal.Body>
                </Modal>

            </tr>

        )
    })
    return (
        <tbody>
            {rows}
        </tbody>

    )
}


export default ElementPropertiesTable;