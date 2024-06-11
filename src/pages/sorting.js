import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo, faRandom } from '@fortawesome/free-solid-svg-icons';
import "./sorting.css";
import "./demo.css";

const Sorting = () => {
    const [barNumber, setBarNumber] = useState(10);
    const [barArray, setBarArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [playing, setPlaying] = useState(false);
    const [sorter, setSorter] = useState("selection-sort");
    const [stepNumber, setStepNumber] = useState(0);
    const [highlightedIndices, setHighlightedIndices] = useState([]);
    const interval = 300;

    const ChangeBarArray = (event) => {
        const val = event.target.value;
        let num = (val > 30 ? 30 : val)
        num = (num < 5 ? 5 : num)
        const arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(i + 1);
        }
        setBarArray(arr);
        setBarNumber(num);
        setStepNumber(0);
        setHighlightedIndices([]);
    };

    const RandomizeArr = () => {
        const arr = [...barArray];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setBarArray(arr);
        setStepNumber(0);
        setHighlightedIndices([]);
    };

    const ResetArr = () => {
        const arr = [];
        for (let i = 0; i < barNumber; i++) {
            arr.push(i + 1);
        }
        setBarArray(arr);
        setStepNumber(0);
        setHighlightedIndices([]);
    };

    const play = () => {
        setPlaying(true);
    };

    const pause = () => {
        setPlaying(false);
    };

    const isSorted = useCallback(() => {
        for (let i = 0; i < barArray.length - 1; i++) {
            if (barArray[i] > barArray[i + 1]) {
                return false;
            }
        }
        return true;
    }, [barArray]);

    const SelectionSort = useCallback(
        (j) => {
            let arr = [...barArray];
            let min = arr[j];
            let minIndex = j;

            for (let i = j; i < barNumber; i++) {
                setHighlightedIndices([j, minIndex])
                if (arr[i] < min) {
                    min = arr[i];
                    minIndex = i;
                }
            }

            if (minIndex !== j) {
                setHighlightedIndices([j, minIndex]);

                let firstElement = arr[j];
                arr[j] = arr[minIndex];
                arr[minIndex] = firstElement;
                setTimeout(() => {
                    setBarArray([...arr]);
                    setHighlightedIndices([]);
                }, interval);
            }

            setBarArray([...arr]);
        },
        [barArray, barNumber, interval]
    );

    const performSortStep = useCallback(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        switch (sorter) {
            case "selection-sort":
                SelectionSort(stepNumber);
                break;
            // Add cases for other sorting algorithms as needed
            default:
                console.error("Invalid sorter type");
                setPlaying(false);
                break;
        }

        setStepNumber((prevStep) => prevStep + 1);
    }, [SelectionSort, sorter, stepNumber]);

    useEffect(() => {
        // This useEffect runs whenever playing, sorter, or barArray changes
        if (playing && !isSorted()) {
            const sortingInterval = setInterval(() => {
                performSortStep();
            }, interval);

            // Cleanup interval to avoid memory leaks
            return () => clearInterval(sortingInterval);
        } else {
            setPlaying(false);
        }
    }, [playing, isSorted, sorter, barArray, performSortStep]);


    return (
        <div id="sorting-wrapper">
            <div id="sorting">
                <h1>Sorting Algorithm Viewer</h1>
                <div id="sorter-wrapper">
                    <div id="bar-graph-area">
                        {barArray.map((num, index) => (
                            <div
                                id={"bar-" + num}
                                className={`bar ${
                                    highlightedIndices.includes(index)
                                        ? "highlighted"
                                        : ""
                                }`}
                                key={index}
                                style={{
                                    height:
                                        250 -
                                        (barNumber - num) * (250 / barNumber) +
                                        "px",
                                }}
                            ></div>
                        ))}
                    </div>
                    <div id="controls-area">
                        <div id="play-pause">
                            <button
                                onClick={playing ? pause : play}
                                className="button-1 button"
                            >
                                {playing ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                            </button>
                        </div>
                        <div id="reset">
                            <button
                                onClick={ResetArr}
                                className="button-2 button"
                            >
                                <FontAwesomeIcon icon={faRedo} />
                            </button>
                        </div>
                        <div id="randomize">
                            <button
                                onClick={RandomizeArr}
                                className="button-2 button"
                            >
                                <FontAwesomeIcon icon={faRandom} />
                            </button>
                        </div>
                        <div
                            id="sort-selector"
                            onChange={(event) => setSorter(event.target.value)}
                        >
                            <select className="select-style">
                                <option value="selection-sort">
                                    Selection Sort
                                </option>
                                <option value="selection-sort">
                                    Not Yet Implemented
                                </option>
                            </select>
                        </div>
                        <div id="number-selector">
                            <input
                                id="number-selector-input"
                                name="bar-number"
                                className="input-number"
                                value={barNumber}
                                onChange={ChangeBarArray}
                                type="number"
                                max="30"
                                min="5"
                                step="1"
                            ></input>
                        </div>
                        <div id="step-counter" className="display-element">
                            <span>Steps:{stepNumber}</span>
                        </div>
                    </div>
                </div>
                W.I.P.
            </div>
        </div>
    );
};

export default Sorting;